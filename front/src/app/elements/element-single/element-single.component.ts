import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ElementService} from "../../core/services/element.service";
import {Element, Images, Root} from "../../core/models/element.model";
import {  Observable} from "rxjs";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {ImageService} from "../../core/services/imageService";
import {environment} from "../../../environments/environment";
import {StateService} from "../../reactive-state/services/state-service";
import {NzMarks} from "ng-zorro-antd/slider";
import * as L from 'leaflet';


@Component({
  selector: 'app-element-single',
  templateUrl: './element-single.component.html',
  styleUrls: ['./element-single.component.scss']
})

export class ElementSingleComponent implements  OnInit,AfterViewInit{
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
  userAvatar!:string
  //
  hGutter = 16;
  vGutter = 16;
    count = 4;
  array = new Array(this.count);
  marksCount: NzMarks = {
    2: '2',
    3: '3',
    4: '4',
    6: '6',
    8: '8',
    12: '12'
  };
  private formattedDate: string | undefined;
  getCount(){
    return this.count;
  }

  constructor(
    private elementService: ElementService,
    private route: ActivatedRoute,
    private imageService : ImageService,
    private router: Router
  ) {

    this.route.params.subscribe(params => {
      this.elementId  = +params['id']; // Convertir en nombre
    });

  }
  map!: L.Map;
  ngOnInit() {
    this.cards = this.elementService.cards;
    this.card = this.cards[0];
    //console.log(this.card);

    this.api_url = environment.backend+"/";

    // this.addMarker();
    //
    this.array = new Array(this.count)

    this.element$ = this.elementService.getElementById(this.elementId);
    this.images$ = this.imageService.getImagesForElement(this.elementId);
    //
    //
    this.userAvatar = this.api_url +"/"

  }


  ngAfterViewInit() {
    // // Initialisation de la carte Leaflet
    // const map = L.map('map').setView([51.505, -0.09], 13);
    //
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 19,
    //   attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);
    //
    // L.marker([51.5, -0.09]).addTo(map)
    //   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //   .openPopup();
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



  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    return new Intl.DateTimeFormat('fr-FR', options).format(date);
  }


  isVisible = false;
  isOkLoading = false;
  showModal() {
    this.isVisible = true;
  }

  handleCancel() {
    this.isVisible = false;
  }

  handleOk() {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 10);
  }
}
