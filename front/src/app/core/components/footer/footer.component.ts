import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  implements OnInit {

  agencyName!: string;


  nombrePost$!: Observable<number>;
  estRefresh!: Boolean;

  constructor(private router:Router) {
  }
  ngOnInit(): void {
    this.agencyName = 'nimba'

    this.estRefresh = false;
    // this.nombrePost$ = this.fs.nbPost();
    // this.router.events.subscribe(event =>
    //   {
    //     if (event instanceof NavigationEnd) {
    //       //calls this stuff when navigation ends
    //       // console.log("Event generated lien a changerrrrrrrrrrr ");
    //       this.fs.searchEstCliquer = false;
    //     }
    //   }
    // )
  }



  isRefresh(){
    // alert au refresh pas de sauvegard
    window.addEventListener("beforeunload", function (e) {

      // (e || window.event).returnValue = null;
      return null;
    });
    this.estRefresh = true;
  }

  goAvenir(){
    this.router.navigateByUrl('av/avenir')
  }
  goLogin(){
    this.router.navigateByUrl('auth/login')
  }
  goSignUp(){
    this.router.navigateByUrl('auth/signUp')
  }
  goWrite(){
    this.router.navigateByUrl('readme/create')
  }

  isLoged(){
    if(sessionStorage.getItem('user_id') === null){
      return false;
    }else {
      return true;
    }
  }

}
