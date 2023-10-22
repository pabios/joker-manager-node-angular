import {Component, OnInit} from '@angular/core';
import {forkJoin, map, Observable, switchMap} from "rxjs";
import {User} from "../../core/models/user.model";
import {Chat} from "../../core/models/chat.model";
import {ChatService} from "../../core/services/chat.service";
import {AuthService} from "../../core/services/auth.service";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{
  messages$!: Observable<Chat[]>;
  user$!: Observable<User>;
  userSender$!: Observable<User>;
  messagesWithUsers$!:Observable<any>
  receiverId!: number;
  receiverName!: string;
  currentUserId:string | null = "0";

  //
  data: any[] = [];
  submitting = false;
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };
  inputValue = '';
  avatarCurrent !:string;

  api_back!:string;
//
  isVisible = false;
  isOkLoading = false;


  constructor(
    private chatService:ChatService,
    private auth: AuthService,
    private router:Router) {
  }
  ngOnInit(): void {

    let currentId = Number(this.auth.getUserId());
    if(currentId != 0){
      this.currentUserId = this.auth.getUserId();

    }
    this.messages$ = this.chatService.getAllMessageByUser(currentId)
    this.user$ = this.auth.getUserById(currentId);
    this.messages$.subscribe(res=>{
      console.log(res)
    })

    //
    this.messagesWithUsers$ = this.getMessagesWithUsers();
    //
    this.api_back = environment.backend+"/";

  }
  getMessagesWithUsers(): Observable<any> {
    let currentUserId = Number(this.auth.getUserId());

    return this.chatService.getAllMessageByUser(currentUserId).pipe(
      switchMap(messages => {
        // Pour chaque message, récupérez l'utilisateur qui l'a écrit
        const observables = messages.map(message => this.auth.getUserById(Number(message.user_id)));
        // Utilisez forkJoin pour attendre que toutes les requêtes soient terminées
        return forkJoin(observables).pipe(
          map(users => {
            // Associez chaque message à son utilisateur correspondant
            return messages.map(message => {
              // Recherchez l'utilisateur correspondant au message
              const user = users.find(u => u.id === message.user_id);
              console.log("bonjour user")
              console.log(user)
              if(user){
                this.avatarCurrent = this.api_back+ user.imgUrl
                console.log(this.avatarCurrent)
                console.log('est le avatar current ')
              }else{
                this.avatarCurrent = 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
              }
              return {
                id: message.id,
                messageContent: message.content,
                createdAt: message.createdAt,
                user: user || null // Utilisateur correspondant au message ou null s'il n'existe pas
              };
            });
          })
        );
      })
    );
  }

handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    setTimeout(() => {
      this.submitting = false;
      this.data = [
        ...this.data,
        {
          ...this.user,
          content,
          datetime: new Date(),
          // displayTime: formatDistance(new Date(), new Date())
        }
      ].map(e => ({
        ...e,
        // displayTime: formatDistance(new Date(), e.datetime)
      }));
    }, 800);
  }


  showModal(  id: string,name:string): void {
      this.isVisible = true;
      this.receiverId = Number(id);
      this.receiverName = name;
      console.log("bonjour show modal is cliquer")
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 100);
    this.router.navigateByUrl('chat')

  }

  handleCancel(): void {
    this.isVisible = false;
    this.router.navigateByUrl('chat')

  }

  protected readonly open = open;
}
