import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../core/models/user.model";
import {map, Observable} from "rxjs";
import {AuthService} from "../../core/services/auth.service";
import {ChatService} from "../../core/services/chat.service";
import {Router} from "@angular/router";
import {NotificationService} from "../../core/services/notification.service";
import {environment} from "../../../environments/environment";
import {UtilsService} from "../../core/services/utils.service";

@Component({
  selector: 'app-send-form',
  templateUrl: './send-form.component.html',
  styleUrls: ['./send-form.component.scss']
})
export class SendFormComponent implements OnInit{

  @Input() receiverId!: number
  currentUserId!:number

  user$!: Observable<User>;
  userReceiver$!: Observable<User>;
  userReceiverTelephone!:string;
  api_back: any;
  //
  data: any[] = [];
  submitting = false;
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };
  inputValue = '';
  avatarCurrent !:string;
  //


  constructor(private auth:AuthService,
              private chatService:ChatService,
              private router:Router,
              private  utilsService:UtilsService ,
              private notifService:NotificationService) {
  }
  ngOnInit(): void {
    this.currentUserId = Number(this.auth.getUserId())
    this.user$ = this.auth.getUserById(this.currentUserId);
    //
    this.auth.getUserById(this.receiverId)
      .pipe(
        map(user => {
          this.userReceiverTelephone = user.telephone;
          return user; // Retourner l'objet User inchangé
        })
      )
      .subscribe(user => {
        // Vous pouvez accéder à user ici si nécessaire
        console.log(user);
      });
    //
    this.api_back = environment.backend+"/"
  }

  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;

    // this.utilsService.sendWhatsapp("+330758743200",content)
    // this.utilsService.sendWhatsapp(this.userReceiverTelephone,content)
    this.chatService.addMessage(this.currentUserId,this.receiverId,content).subscribe(res=>{
      // console.log(res)
      if(res){

      }
    })
    this.router.navigateByUrl('/chat').then(() => {
      this.notifService.showSuccess('votre message a bien été envoyer','')
      // Rechargez la page
      window.location.reload();
    });
    // this.message.create('success', `votre message a bien été envoyer`,{nzDuration: 10000});




    //
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
    }, 400);
  }


  goLogin() {
    this.router.navigateByUrl('/auth/login').then(() => {
      // window.location.reload();
    });
  }
}
