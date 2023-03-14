import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, FormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";
import {NotificationService} from "../../../core/services/notification.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  snapFormSign!: UntypedFormGroup;
  emailRegex!: RegExp;
  passwordRegex!: RegExp;
  id!:any;

  constructor(private auth:AuthService,
              private router: Router,
              private notif:NotificationService,
              private  formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {


    this.emailRegex = /[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}/;
    this.passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}/;

    this.snapFormSign = this.formBuilder.group({
        email:[null,Validators.required,Validators.pattern(this.emailRegex)],
        password:[null,Validators.required]
      },{
        updateOn: 'blur' // formulaire mis a jours lorsqu'on change de champs
      }

    );
  }


  signUp(email:string,password:string):void {
    //this.auth.login();

    const formData : FormData = new FormData();
      formData.append('email',email)
      formData.append('password',password)

      this.auth.signUp(formData).subscribe(
        (res=>{
          // console.log(res);
          // localStorage.setItem('user_id', res);
          sessionStorage.setItem('user_id',res);
          // this.auth.userId = localStorage.getItem('user_id');
          this.auth.userId = sessionStorage.getItem('user_id');

          // console.log(localStorage.getItem('user_id')); console.log('********** le local storage dans sincrire ts')
          // console.log(this.auth.userId);console.log('**********  dans sincrire ts')

          //alert(this.auth.userId);
          if(res == 'emailExist'){
            this.notif.showError("oups","cet email existe veuillez vous connecter");
          }else{
            this.notif.showSuccess("tu peux maintenant publier en te connectant","votre inscription est terminer");
            this.router.navigateByUrl('/facesnaps');
          }
        })
      )

  }


}