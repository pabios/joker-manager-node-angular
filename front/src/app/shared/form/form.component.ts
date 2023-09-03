import {Component, Input} from '@angular/core';
import {Property, PropertyType} from "../../core/models/form-proporty.model";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {map, Observable} from "rxjs";
import {Element} from "../../core/models/element.model";
import {ElementService} from "../../core/services/element.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {


  @Input() propertyType!: PropertyType;
  property!: { price: number; description: string; title: string; type: PropertyType }

  //
  elementForm!: UntypedFormGroup;
  elementProview$!:  Observable<Element>;
  urlRegex!:RegExp;
  fichierRegex!:RegExp;
  user_id!:any;

  fileFormatStatus = true;

  constructor(private  formBuilder: UntypedFormBuilder,
              private elementService: ElementService,
              private router:Router
    ) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.fichierRegex = /([a-zA-Z0-9\s_\\.\-\(\):])+(.md)$/;

    this.elementForm = this.formBuilder.group({
        title:[null,Validators.required],
        description: [null,Validators.required],
        imageUrl: [null,[Validators.required,Validators.pattern(this.urlRegex)]],
        location:[null],
        // fichier:['',[Validators.required,Validators.pattern(this.fichierRegex)]]
      },{
        updateOn: 'blur' // formulaire mis a jours lorsqu'on change de champs
      }

    );

    this.elementProview$ = this.elementForm.valueChanges.pipe(
      map(elementForm => ({
        ...elementForm,
        createdDate: new Date(),
        id:0,
        snaps:0
      }))
    );

    // console.log(this.auth.userId);console.log('********** dans new post')
    // this.user_id = localStorage.getItem('user_id');
    this.user_id = sessionStorage.getItem('user_id');
  }

  // onSubmitForm():void{
  //   //console.log(this.snapForm.value);
  //   this.faceSnapsService.addFaceSnap(this.snapForm.value);
  //   this.router.navigateByUrl('/facesnaps');
  // }

  onSubmitForm():void{
    // this.elementService.addFaceSnap(this.snapForm.value).pipe(
    //   tap(() => this.router.navigateByUrl('/readme'))
    // ).subscribe();
  }

  /*---- file upload----*/
  imageSrc:any = '';
  status:boolean = false


  onFileChange(event:any) {
    const fileList: FileList = event.target.files;
    //check whether file is selected or not
    //
    // console.log('hello fichier---------')
    // console.log(fileList);
    // console.log('hello fichier---------')
    this.fichierRegex = /([a-zA-Z0-9\s_\\.\-\(\):])+(.md)$/;



    if (fileList.length > 0) {

      const file = fileList[0];
      //get file information such as name, size and type
      // console.log('finfo',file.name,file.size,file.type);

      if (this.fichierRegex.test(file.name)) {
        console.log("Valid");
        if((file.size/1048576)<=5) //max file size is 4 mb
        {
          // this.imageSrc = file.name;
          this.imageSrc = file;

          // this.notif.showSuccess('cool','votre fichier est good')
          this.fileFormatStatus = true;

        }else{
          //this.snackBar.open('File size exceeds 4 MB. Please choose less than 4 MB','',{duration: 2000});
          // this.notif.showError("ooups","la taille du fichier  ne doit pas depasser 5 Mb ")
          this.fileFormatStatus = false;

        }
      } else {
        // this.notif.showError("ooups","Le Fichier doit etre au format markdown article.md")
        this.fileFormatStatus = false;
      }

      // if(file.name !== 'resume.md'){
      //   this.notif.showError("ooups","le fichier doit etre au format markdown exemple: article.md")
      //
      // }


    }
  }




  /**
   *  nouvelle enregistrement
   * @param title
   * @param description
   * @param photo
   * @param laDate
   * @param location
   * @param fichier
   */
  onSend(title:string,description:string,photo:string,location:string){
    const formData : FormData = new FormData();
    formData.append('title',title)
    formData.append('description',description)
    formData.append('photo',photo)
    formData.append('location',location)
    formData.append('fichier',this.imageSrc)
    // formData.append('laDate',laDate)
    formData.append('user_id',this.user_id)
    // this.elementService.ajout(formData).subscribe(
    //   (res=>{
    //     // console.log(res)
    //     if(res == 'sucesss'){
    //       this.notif.showSuccess("super","Votre article est bien poster vous pouvez reactiliser ");
    //
    //     }else{
    //       this.notif.showError("ooups","une erreur s'est produite")
    //     }
    //   })
    // )
    this.router.navigateByUrl('/readme');
  }

  goChat(){
    this.router.navigateByUrl('/channel/chat');
  }
}
