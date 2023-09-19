import {Component, Input, OnInit} from '@angular/core';
import {ElementService} from "../../core/services/element.service";
import {Element, Images, Root} from "../../core/models/element.model";
import {Observable} from "rxjs";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {ImageService} from "../../core/services/imageService";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-element-single',
  templateUrl: './element-single.component.html',
  styleUrls: ['./element-single.component.scss']
})

export class ElementSingleComponent implements  OnInit{
  // @Input() state-list!: Element;
  element!: Root
  element$!: Observable<Root> // @todo use this
  images$!: Observable<Images[]> // @todo use this
  elementId!:number

  cards!: any[];

  card!: any;

  markers: any[] = [];
  center: any = {
    lat: 48.68439921578848,
    lng:6.188186803578728
  };

  api_url!:string;

  constructor(
    private elementService: ElementService,
    private route: ActivatedRoute,
    private imageService : ImageService,
    private router: Router
  ) {

    this.route.params.subscribe(params => {
      this.elementId  = +params['id']; // Convertir en nombre
      // Utilisez l'identifiant dans votre logique
    });

  }

  ngOnInit() {
    this.cards = this.elementService.cards;
    this.card = this.cards[0];
    //console.log(this.card);

    this.api_url = environment.backend+"/";

    this.addMarker();

    //
    // const elementId = +this.route.snapshot.params['element'];

    this.element$ = this.elementService.getElementById(this.elementId);
    this.images$ = this.imageService.getImagesForElement(this.elementId);

    //console.log(this.images$.pipe(image =>image.url))

    // this.imageService.getImagesForElement(elementId).subscribe((images: Images[]) => {
    //   console.log(images); // C'est où vous devriez voir les données d'images
    // });
  }

  addMarker() {
    this.markers.push({
      position:{
        // lat: this.center.lat,
        // lng: this.center.lng
        lat: 9.509167,
        lng: -13.712222
      },
      label: {
        color: 'red',
        text: 'Localisation ',
      },
      title: 'Le titre ',
      options: {
        animation: google.maps.Animation.BOUNCE ,
      },
    });
  }

  goBooking(id:any,price:number):void{

    sessionStorage.setItem('price',String(price))
    this.router.navigateByUrl(`/booking/${id}`).then(r => '')
  }

  // goBooking(id: any, price: number): void {
  //   this.router.navigate(['/booking', id], {
  //     queryParams: { price: price }
  //   });
  // }

  // goBooking(id: any, price: number): void {
  //   const navigationExtras: NavigationExtras = {
  //     state: {
  //       price: price
  //     }
  //   };
  //   this.router.navigate(['/booking', id], navigationExtras);
  // }


}
