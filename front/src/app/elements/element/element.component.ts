import {Component, Input} from '@angular/core';
import {Element, Images} from "../../core/models/element.model";
import {Observable} from "rxjs";
import {ImageService} from "../../core/services/imageService";
import {NavigationEnd, Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent {

  @Input() element!: Element;
  @Input() images!: Images[];

  api_url!:string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.api_url = environment.backend+"/";
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('Route demandée :', event.url);
      }
    });
  }
  onViewElement(){
      this.router.navigateByUrl(`elements/${this.element.id}`);
  }


  goBooking(id:any,price:number):void{
    sessionStorage.setItem('price',String(price))
    this.router.navigateByUrl(`/booking/${id}`).then(r => '')
  }
}
