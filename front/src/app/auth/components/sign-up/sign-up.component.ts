import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  FormControl,
  UntypedFormGroup,
  Validators,
  FormGroup,
  NonNullableFormBuilder, AbstractControl, ValidatorFn
} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";
import {NotificationService} from "../../../core/services/notification.service";
import {NzFormTooltipIcon} from "ng-zorro-antd/form";
import {NzModalService} from "ng-zorro-antd/modal";

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

  //
  visible = false; //drawer

  countries: any[] = [
    // Pays d'Afrique
    { label: 'Algérie', value: '+213', flag: 'fi-dz' },
    { label: 'Maroc', value: '+212', flag: 'fi-ma' },
    { label: 'Nigeria', value: '+234', flag: 'fi-ng' },
    { label: 'Guinée', value: '+224', flag: 'fi-gn' },
    { label: 'Sénégal', value: '+221', flag: 'fi-sn' }, // Sénégal
    { label: 'Côte d\'Ivoire', value: '+225', flag: 'fi-ci' }, // Côte d'Ivoire
    { label: 'Gambie', value: '+220', flag: 'fi-gm' }, // Gambie
    { label: 'Tunisie', value: '+216', flag: 'fi-tn' }, // Tunisie

    // Ajoutez d'autres pays d'Afrique au besoin

    // Pays d'Europe
    { label: 'France', value: '+33', flag: 'fi-fr' },
    { label: 'Allemagne', value: '+49', flag: 'fi-de' },
    { label: 'Royaume-Uni', value: '+44', flag: 'fi-gb' },
    { label: 'Espagne', value: '+34', flag: 'fi-es' }, // Espagne
    { label: 'Portugal', value: '+351', flag: 'fi-pt' }, // Portugal
    { label: 'Belgique', value: '+32', flag: 'fi-be' }, // Belgique
    { label: 'Turquie', value: '+90', flag: 'fi-tr' }, // Turquie
    // Ajoutez d'autres pays d'Europe au besoin

    // Pays d'Amérique du Nord
    { label: 'États-Unis', value: '+1', flag: 'fi-us' },
    { label: 'Canada', value: '+1', flag: 'fi-ca' },
    { label: 'Mexique', value: '+52', flag: 'fi-mx' }
    // Ajoutez d'autres pays d'Amérique du Nord au besoin
  ];



  validateForm!: FormGroup<{
    phoneNumber: FormControl<string>;
    password: FormControl<string>;
    checkPassword: FormControl<string>;
    fullName: FormControl<string>;
    phoneNumberPrefix: FormControl<string>;
    agree: FormControl<boolean>;
  }>;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  //
  constructor(private auth:AuthService,
              private router: Router,
              private notif:NotificationService,
              private  formBuilder: UntypedFormBuilder,
              private fb: NonNullableFormBuilder,
              private modal: NzModalService) {

  }

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

    // zorro

    this.validateForm = this.fb.group({
      phoneNumber: ['', [Validators.required]],
      password: ['', [Validators.required]],
      checkPassword: ['', [Validators.required, this.confirmationValidator]],
      fullName: ['', [Validators.required]],
      phoneNumberPrefix: ['', [Validators.required]],
      agree: [false]
    });

  }


  signUp(email:string,password:string):void {
    //this.auth.login();

    const formData : FormData = new FormData();
      formData.append('email',email)
      formData.append('password',password)

      // this.auth.signUp(formData).subscribe(
      //   (res=>{
      //     sessionStorage.setItem('user_id',res);
      //     this.auth.userId = sessionStorage.getItem('user_id');
      //
      //     if(res == 'emailExist'){
      //       this.notif.showError("oups","cet email existe veuillez vous connecter");
      //     }else{
      //       this.notif.showSuccess("tu peux maintenant publier en te connectant","votre inscription est terminer");
      //       this.router.navigateByUrl('/facesnaps');
      //     }
      //   })
      // )

  }
  //

  submited() {
    if(this.validateForm.value){
      console.log(this.validateForm.value.phoneNumberPrefix)

      this.auth.signUp(this.validateForm).subscribe(res=>{
        console.log(res)
      })
    }else{
      console.log('nop erreur s est produite')
      console.log('bonsoir')

      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
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

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator: ValidatorFn = (control: AbstractControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }
// drawer
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }


  //



}
