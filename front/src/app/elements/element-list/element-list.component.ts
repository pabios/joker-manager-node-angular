import {Component, OnInit} from '@angular/core';
import {CarouselConfig} from "ngx-bootstrap/carousel";
import {PageEvent} from "@angular/material/paginator";
import {ElementService} from "../../core/services/element.service";

@Component({
  selector: 'app-elements-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 4000, noPause: true, showIndicators: true } }
  ]
})

/**
 * Element
 *  Houssing -> nimba
 *  Car -> xcar
 *  ....
 */
export class ElementListComponent implements OnInit {
  markers: any[] = [];
  center: any = {
    lat: 48.68439921578848,
    lng:6.188186803578728
  };
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  cards!: any[];

  pageSize!:number; // Nombre de cartes par page
  currentPage = 0; // Page actuelle
  currentCards: any[] = [];
  pageSizeOptions!: number[];


  constructor(private elementService: ElementService) {
  }

  ngOnInit() {
    this.cards = this.elementService.cards;
    this.pageSize = 3;
    this.setPageSizeOptions();

    this.addMarker();
  }

  addMarker() {
    this.markers.push({
      position:{
        lat: this.center.lat,
        lng: this.center.lng
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


  // Obtenir les cartes pour affichage
  getCardsForPage() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    return this.cards.slice(start, end);
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    const start = this.currentPage * event.pageSize;
    const end = start + event.pageSize;
    this.currentCards = this.cards.slice(start, end);
  }

  setPageSizeOptions() {
    if (this.cards.length > 100) {
      this.pageSizeOptions = [3, 6, 25, 100];
    } else if (this.cards.length > 25) {
      this.pageSizeOptions = [3, 6, 25];
    } else if (this.cards.length >= 6) {
      this.pageSizeOptions = [3, 6];
    } else {
      this.pageSizeOptions = [3];
    }
  }

}

