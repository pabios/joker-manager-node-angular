import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../core/models/user.model";
import {Observable} from "rxjs";
import {AuthService} from "../../core/services/auth.service";
import {ChatService} from "../../core/services/chat.service";
import {Router} from "@angular/router";
import {NotificationService} from "../../core/services/notification.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-send-form',
  templateUrl: './send-form.component.html',
  styleUrls: ['./send-form.component.scss']
})
export class SendFormComponent implements OnInit{

  @Input() receiverId!: number
  currentUserId!:number

  user$!: Observable<User>;
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
              private notifService:NotificationService) {
  }
  ngOnInit(): void {
    this.currentUserId = Number(this.auth.getUserId())
    this.user$ = this.auth.getUserById(this.currentUserId);

    //
    this.api_back = environment.backend+"/"
  }

  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;


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
