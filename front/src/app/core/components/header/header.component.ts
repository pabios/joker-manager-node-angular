import {Component, HostListener, OnInit} from '@angular/core';
import {UtilsService} from "../../services/utils.service";
import {Observable} from "rxjs";
import {User} from "../../models/user.model";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  isVisibleSearch = false;
  isOkLoading = false;
  user$!: Observable<User>;
  visible = false;
  notLogin = false;
  nimbaBadge!:string;
  loginStatus!: boolean ;
  isFixedSearch = false;




  constructor(
    public utilsService:UtilsService,
    private auth: AuthService,
    private router:Router
  ) {
  }

  ngOnInit() {
    this.isVisibleSearch = this.utilsService.isVisibleSearch;
    //
    let curentIdUser = Number(this.auth.getUserId());
    // this.user$ = this.auth.getUserById(curentIdUser);
    this.nimbaBadge = "nimba"

    this.loginStatus = curentIdUser != 0;

  }

  onKeyDown(event: KeyboardEvent): void {
    // Annule l'événement si une touche de caractère est pressée (code ASCII entre 48 et 90)
    if (event.keyCode >= 48 && event.keyCode <= 90) {
      event.preventDefault();
    }
    this.utilsService.showSearchModal()
  }

  open(): void {
    let curentIdUser = Number(this.auth.getUserId());
    this.user$ = this.auth.getUserById(curentIdUser);
    this.visible = true;
    // console.log( Number(this.auth.getUserId()) );
    // console.log('hello le  monde ')
    this.loginStatus = curentIdUser != 0;
    // console.log(this.loginStatus)
    // if(Number(this.auth.getUserId()) ==0){
    //   this.notLogin = true;
    // }else {
    //   this.notLogin = false;
    // }
  }

  close(): void {
    this.visible = false;
  }

  goLogin(): void { // go log or sign
    this.visible = false;

    if(this.loginStatus){
      this.auth.signOut();
    }else{
      this.router.navigateByUrl('auth/login',  ).then(() => {
        // Effectuer des actions supplémentaires après la redirection
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isFixedSearch = offset > 50; // Ajoutez ou supprimez la classe en fonction de la position de défilement
  }

}
