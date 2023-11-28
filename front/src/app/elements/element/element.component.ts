import {Component, Input} from '@angular/core';
import {Element, Images} from "../../core/models/element.model";
import {Observable} from "rxjs";
import {ImageService} from "../../core/services/imageService";
import {NavigationEnd, Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {AuthService} from "../../core/services/auth.service";
import {BadgeInfo} from "../../core/models/BadgeInfo.model";

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent {

  @Input() element!: Element;
  @Input() images!: Images[];

  api_url!:string;
  elementIsVerifiedBage!:string;
  //badge
    badgeInfo: BadgeInfo = {
    'badge': 'Nimba',
    'color': '#52c41a'
  };
  // chat
  isVisible = false;
  isOkLoading = false;
  receiverAdminId !: string
  //
  constructor(private router: Router,private auth:AuthService) { }

  ngOnInit() {
    this.api_url = environment.backend+"/";
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('Route demandée :', event.url);
      }
    });
    //
    this.setStatusElementVerified(this.element.verified)
    this.element.description = this.truncateDescription(this.element.description)
  }
  //
  setStatusElementVerified(verified:boolean){
    if (verified) {
      this.badgeInfo.badge = "Garantie";
      this.badgeInfo.color = "green";
    } else {
      this.badgeInfo.badge = "Vérification en cours";
      this.badgeInfo.color = "volcano";
    }
  }
  truncateDescription(description: string): string {
    const words = description.split(' ');
    if (words.length > 3) {
      return words.slice(0, 3).join(' ') + '...';
    }
    return description;
  }

  //

  onViewElement(){
      this.router.navigateByUrl(`elements/${this.element.id}`);
  }


  goBooking(id:any,price:number):void{
    sessionStorage.setItem('price',String(price))
    this.router.navigateByUrl(`/booking/${id}`).then(r => '')
  }

  showModal(  id: string): void {
    this.isVisible = true;
    this.receiverAdminId = id
    //console.log("bonjour show modal is cliquer")
  }
  handleCancel(): void {
    this.isVisible = false;
  }



  protected readonly Number = Number;
}
