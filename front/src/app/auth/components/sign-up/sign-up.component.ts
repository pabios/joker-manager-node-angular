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
    phoneEmail: FormControl<string>;
    password: FormControl<string>;
    checkPassword: FormControl<string>;
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
      phoneEmail: ['', [Validators.required]],
      password: ['', [Validators.required]],
      checkPassword: ['', [Validators.required, this.confirmationValidator]],
      agree: [true,[Validators.required]]
    });

  }

  submited() {
    if(this.validateForm.value){
      this.auth.signUp(this.validateForm).subscribe(res=>{
        // console.log(res)
        //
        // this.router.navigate(['elements']);

        if(res!=null){
          this.auth.saveToken(res)

          this.router.navigateByUrl('/profils').then(() => {
            this.notif.showSuccess('votre logement a bien été publier','')
            // Rechargez la page
            window.location.reload();
          });
        }
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


  getFormControl(name: string) {
    return this.validateForm.get(name);
  }
}
