import {Component, Input} from '@angular/core';
import {Property, PropertyType} from "../../core/models/form-proporty.model";
import {FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {map, Observable, tap} from "rxjs";
import {Element} from "../../core/models/element.model";
import {ElementService} from "../../core/services/element.service";
import {Router} from "@angular/router";
import {ItemType} from "../../core/models/Piece.model";
import {Category} from "../../core/models/category.model";
import {CategoryService} from "../../core/services/category.service";
import {ItemService} from "../../core/services/item.service";
import {NotificationService} from "../../core/services/notification.service";

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

  // hello new
  itemType!: ItemType;
  itemTypeGroup!: FormGroup;
  category$!: Observable<Category[]>
  items$!: Observable<ItemType[]>

  imageForPreview!:any;

  constructor(private  formBuilder: UntypedFormBuilder,
              private elementService: ElementService,
              private catergoryService: CategoryService,
              private itemsService: ItemService,
              private router:Router,
              private notificationService:NotificationService
    ) { }

  ngOnInit(): void {
    this.itemTypeGroup = new FormGroup({
      itemType: new FormControl(new ItemType())
    });

    this.category$ = this.catergoryService.getAllCategory();
    this.items$ = this.itemsService.getAllItems();
    // end new
    //
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.fichierRegex = /([a-zA-Z0-9\s_\\.\-\(\):])+(.md)$/;

    this.elementForm = this.formBuilder.group({
        name:[null,Validators.required],
        description: [null,Validators.required],
        content: [null,Validators.required],
        imageUrl: [null,[Validators.required,Validators.pattern(this.urlRegex)]],
        sizee:[null],
        price:[null],
        item:[null,Validators.required],
        category:[null,Validators.required],
        location:[''],
        // fichier:['',[Validators.required,Validators.pattern(this.fichierRegex)]]
      },{
        updateOn: 'blur' // formulaire mis a jours lorsqu'on change de champs
      }

    );

    this.elementProview$ = this.elementForm.valueChanges.pipe(
      map(elementForm => ({
        ...elementForm,
        createdDate: new Date(),
        // snaps:0
      }))
    );

    // console.log(this.auth.userId);console.log('********** dans new post')
    // this.user_id = localStorage.getItem('user_id');
    // this.user_id = sessionStorage.getItem('user_id');
    this.user_id = 1;
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
  // imagesSrc: { url: string[], alt: string } = { url: [], alt: 'this is an image' };
  // imagesSrc: any = ''
  imagesSrc: any[] = [];


  status:boolean = false


  onFileChange(event:any) {
    const fileList: FileList = event.target.files;
    //check whether file is selected or not
    //
    // console.log('hello fichier---------')
    // console.log(fileList);
    // console.log('hello fichier---------')
    this.fichierRegex = /([a-zA-Z0-9\s_\\.\-\(\):])+(.md)$/;

    console.log(fileList)



    if (fileList.length > 0) {

      const file = fileList[0];
      //get file information such as name, size and type
      console.log('finfo',file.name,file.size,file.type);

      if (this.fichierRegex.test(file.name)) {
        console.log("Valid");
        if((file.size/1048576)<=5) //max file size is 4 mb
        {
          this.imageSrc = file;

          this.fileFormatStatus = true;

        }else{
          this.fileFormatStatus = false;

        }
      } else {
        this.fileFormatStatus = false;
      }

    }
  }

  // ok mais juste 1
  // onFileChangeImage(event: any) {
  //   const files = event.target.files;
  //   if (files) {
  //     for (let i = 0; i < files.length; i++) {
  //       const reader = new FileReader();
  //       const file = files[i];
  //       const fileName = file.name; // Nom du fichier
  //
  //
  //       this.imagesSrc = file;
  //       console.log('Nom du fichier :', fileName);
  //     }
  //   }
  // }

  onFileChangeImage(event: any) {
    const files = event.target.files;
    if (files) {
      // Assurez-vous que this.imagesSrc est initialisé comme un tableau vide
      this.imagesSrc = [];

      console.log("le nombre de fichier")
      console.log(files.length)

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileName = file.name; // Nom du fichier

        // Ajoutez le fichier au tableau this.imagesSrc
        this.imagesSrc.push(file);

        // Accédez au nom du fichier ici
        console.log('Nom du fichier :', fileName);
      }
      this.imageForPreview = this.imagesSrc[0];
    }
  }




  /**
   *  nouvelle enregistrement
   * @param name
   * @param content
   * @param description
   * @param location
   * @param price
   * @param size
   */
// (click)="onSend(title.value,description.value,locate.value,price.value,sizee.value,typeBed.value,region.value)"

  onSend(name: string,content:string, description: string, location: string,price:string,  size:string){
    const selectedCategoryId = this.elementForm!.get('category')?.value;
    //
    console.log('ID de la catégorie sélectionnée :', selectedCategoryId);
    const selectedItemId = this.elementForm!.get('item')?.value;
    //
    console.log('ID de la item sélectionnée :', selectedItemId);

    console.log("le nome ")

    console.log(name)
    const formData : FormData = new FormData();
    formData.append('name',name)
    formData.append('content',content)
    formData.append('description',description)
    formData.append('locate',location)
    formData.append('price',price)
    formData.append('size',size)

    for (let i = 0; i < this.imagesSrc.length; i++) {
      formData.append(`fichier${i + 1}`, this.imagesSrc[i]);
    }
    formData.append('user_id',this.user_id)
    formData.append('category_id', selectedCategoryId)
    formData.append('element_type', selectedItemId)

    this.elementService.add(formData).subscribe(
      (response) => {

        let rep = response.toString();
        console.log('Réponse du serveur :', response);
        this.notificationService.showSuccess(rep,"cool")

      },
      (error) => {
        let rep = error.toString();

        this.notificationService.showError("verifier ta saisie","erreur")

        console.error('Erreur lors de l\'envoi des données au serveur :', error);
      }
    );

    // this.elementService.add(formData)
    //   .pipe(
    //     tap(response => console.log('Réponse du serveur :', response)),
    //   )
    //   .subscribe();


    // this.router.navigateByUrl('/readme');
  }

  goChat(){
    this.router.navigateByUrl('/channel/chat');
  }
}
