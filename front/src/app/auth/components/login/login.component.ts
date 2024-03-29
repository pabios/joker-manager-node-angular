import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  UntypedFormControl,
  UntypedFormGroup, ValidatorFn,
  Validators
} from "@angular/forms";
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
  //
  passwordVisible = false;
  password?: string;
  //
  countries!: any[];
  validateForm!: FormGroup<{
    phoneEmail: FormControl<string>;
    password: FormControl<string>;
  }>;


  constructor(private auth:AuthService,
              private router: Router,
              private fb: NonNullableFormBuilder,
              private  notif: NotificationService
               ) { }

  ngOnInit(): void {
    this.snapForm = new UntypedFormGroup({
      email: new UntypedFormControl()
    });
    //

    this.countries = this.auth.countries;
    this.validateForm = this.fb.group({
      phoneEmail: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }


  confirmationValidator: ValidatorFn = (control: AbstractControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  submited() {
    if(this.validateForm.value){

      this.auth.logIn(this.validateForm).subscribe(res=>{
        // console.log(res)
        // console.log("sont les res")
        if(res!=null){
          this.auth.saveToken(res)
          const redirectUrl = this.auth.redirectUrl || '';
          this.router.navigate([redirectUrl]);
        }else{
          this.notif.showError('Identifiant incorrect','')
        }
        //
        // Réinitialiser redirectUrl
        this.auth.redirectUrl = '';

      })
    }else{
      // console.log('nop erreur s est produite')
      // console.log('bonsoir')

      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }

    // console.log('sesion bien sauve voyons');
    // console.log(this.auth.getUserId());

  }
  submitForm(): void {
    if (this.validateForm.valid) {
      this.submited();
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }



  //old
  onLogin(email:string,password:string):void {
    // const obs$ = this.auth.logIn().subscribe(res=>{
    //
    //   const user = res.find((u:any)=>{
    //     if(u.email === email && u.password === sha512(password)){
    //       // console.log(u.id)
    //       // localStorage.setItem('user_id', u.id);
    //       sessionStorage.setItem('user_id',u.id)
    //       // console.log('-------------- le id du  res du login -----------------')
    //     }
    //
    //     return u.email === email && u.password === sha512(password)
    //   });
    //   if(user){
    //     this.snapForm.reset();
    //     // this.router.navigateByUrl('/channel/chat');
    //     this.router.navigateByUrl('/facesnaps/create');
    //     this.notif.showSuccess("bienvenue","nous somme ravis de vous revoir");
    //
    //
    //   }else{
    //    // alert("user not found")
    //     this.notif.showError("ooups","aucun utilisateur trouver pour ce compte")
    //
    //   }
    // },err=>{
    //   this.notif.showError("Internet","Une erreur s'est produite ")
    // })

  }



}
