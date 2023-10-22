import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Observable} from "rxjs";
import {CommonService} from "../../services/common.service";
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  implements OnInit {

  agencyName!: string;


  nombrePost$!: Observable<number>;
  estRefresh!: Boolean;

  style$!: Observable<any>;

  constructor(private router:Router,
              private commomService:CommonService,
              private utilsService:UtilsService) {
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

  onSendMail(msg:string){
    this.utilsService.sendEmail(msg);
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
    this.router.navigateByUrl('spec/about')
  }
  goAbout(nomArticle: string) {
    this.router.navigateByUrl(`spec/about/${nomArticle}`);
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
