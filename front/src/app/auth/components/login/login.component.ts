import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {sha512} from "js-sha512";
import {NotificationService} from "../../../core/services/notification.service";
// import {NotificationService} from "../../../core/services/notification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  snapForm!: UntypedFormGroup;


  constructor(private auth:AuthService,
              private router: Router,
              private  notif: NotificationService) { }

  ngOnInit(): void {
    this.snapForm = new UntypedFormGroup({
      email: new UntypedFormControl()
    });
  }



  onLogin(email:string,password:string):void {
    //this.auth.login();
   // console.log(sha512(password));

    const obs$ = this.auth.logIn().subscribe(res=>{
      // console.log(res)
      // console.log('-------------- le res du login -----------------')


      const user = res.find((u:any)=>{
        if(u.email === email && u.password === sha512(password)){
          // console.log(u.id)
          // localStorage.setItem('user_id', u.id);
          sessionStorage.setItem('user_id',u.id)
          // console.log('-------------- le id du  res du login -----------------')
        }

        return u.email === email && u.password === sha512(password)
      });
      if(user){
        this.snapForm.reset();
        // this.router.navigateByUrl('/channel/chat');
        this.router.navigateByUrl('/facesnaps/create');
        this.notif.showSuccess("bienvenue","nous somme ravis de vous revoir");


      }else{
       // alert("user not found")
        this.notif.showError("ooups","aucun utilisateur trouver pour ce compte")

      }
    },err=>{
      this.notif.showError("Internet","Une erreur s'est produite ")
    })
   // this.router.navigateByUrl('/facesnaps');

  }



}
