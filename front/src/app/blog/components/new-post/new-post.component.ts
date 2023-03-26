import {Component, OnInit} from '@angular/core';
import {FormControl, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {map, Observable, take, tap} from "rxjs";
import {Post} from "../../models/posts.models";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../core/services/auth.service";
import {NotificationService} from "../../../core/services/notification.service";
import {PostsService} from "../../services/posts.service";
import {VERSION} from "@angular/cdk";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})


export class NewPostComponent implements OnInit {
  postForm!: UntypedFormGroup;
  postProview$!:  Observable<Post>;
  urlRegex!:RegExp;
  fichierRegex!:RegExp;
  user_id!:any;

  //
  category$!: Observable<any>;


  constructor(private  formBuilder: UntypedFormBuilder,
              private postsService: PostsService,
              private router:Router,
              private auth:AuthService,
              private route: ActivatedRoute
             ) { } // private  notif: NotificationService

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.fichierRegex = /([a-zA-Z0-9\s_\\.\-\(\):])+(.md)$/;

    this.postForm = this.formBuilder.group({
        title:[null,Validators.required],
        description: [null,Validators.required],
        imageUrl: [null,[Validators.required,Validators.pattern(this.urlRegex)]],
        location:[null],
        // fichier:['',[Validators.required,Validators.pattern(this.fichierRegex)]]
      },{
        updateOn: 'blur' // formulaire mis a jours lorsqu'on change de champs
      }

    );

    this.postProview$ = this.postForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        id:0,
        snaps:0
      }))
    );

    // console.log(this.auth.userId);console.log('********** dans new post')
    // this.user_id = localStorage.getItem('user_id');
    this.user_id = sessionStorage.getItem('user_id');

    //
    this.category$ = this.postsService.getCategory().pipe(
      map(data =>{
        return data.map((category: { name: String; }) =>category.name)
      })
    )

  }


  onSubmitForm():void{
    this.postsService.addPost(this.postForm.value).pipe(
      tap(() => this.router.navigateByUrl('/facesnaps'))
    ).subscribe();
  }

  /*---- file upload----*/
  fichier:any = '';
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
          this.fichier = file;
        }else{
          //this.snackBar.open('File size exceeds 4 MB. Please choose less than 4 MB','',{duration: 2000});
          // this.notif.showError("ooups","la taille du fichier  ne doit pas depasser 5 Mb ")
        }
      } else {
        // this.notif.showError("ooups","le fichier doit etre au format markdown exemple: article.md")
      }

      // if(file.name !== 'resume.md'){
      //   this.notif.showError("ooups","le fichier doit etre au format markdown exemple: article.md")
      //
      // }


    }
  }

  categorySelectedId!:string;
  getCategoryId(categoryName: string) {
    this.category$.pipe(
      take(1), //just first value stp
      map(categories => categories.find((category: { name: string; }) => category.name === categoryName)),
    ).subscribe(category => {
      this.categorySelectedId = category?._id ?? '';
    });
  }






  //
  name = "Angular " + VERSION.major;
  display: FormControl = new FormControl("", Validators.required);
  file_store!: FileList;
  file_list: Array<string> = [];

  handleFileInputChange(l: FileList): void {
    this.file_store = l;
    if (l.length) {
      const f = l[0];
      const count = l.length > 1 ? `(+${l.length - 1} files)` : "";
      this.display.patchValue(`${f.name}${count}`);
    } else {
      this.display.patchValue("");
    }
  }

  handleSubmit(): void {
    var fd = new FormData();
    this.file_list = [];
    for (let i = 0; i < this.file_store.length; i++) {
      fd.append("files", this.file_store[i], this.file_store[i].name);
      this.file_list.push(this.file_store[i].name);
    }

    // do submit
  }



  /**
   *  nouvelle enregistrement
   * @param title
   * @param description
   * @param photo
   * @param location
   * @param categoryName
   * @todo a finir
   */
  onSend(title:string,description:string,photo:string,location:string,categoryName:string){
    this.getCategoryId(categoryName);

    const formData : FormData = new FormData();
    formData.append('title',title)
    formData.append('description',description)
    formData.append('photo',photo)
    formData.append('location',location)
    formData.append('fichier',this.fichier)
    this.file_list.forEach((file) => {
      formData.append('images[]', file); //@todo fix
    });
    formData.append('site',environment.site)
    formData.append('category',this.categorySelectedId)
    // formData.append('laDate',laDate)
    formData.append('author',this.user_id)
    this.postsService.ajout(formData).subscribe(
      (res=>{
        // console.log(res)
        if(res == 'sucesss'){
          // this.notif.showSuccess("super","Votre article est bien poster vous pouvez reactiliser ");
        }else{
          // this.notif.showError("ooups","une erreur s'est produite")
        }
      })
    )
    this.router.navigateByUrl('/blog');

  }

  goChat(){
    this.router.navigateByUrl('/channel/chat');
  }

}
