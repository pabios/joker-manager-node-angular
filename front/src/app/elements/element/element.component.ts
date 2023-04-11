import {Component, Input, OnInit} from '@angular/core';
import {ElementService} from "../../core/services/element.service";
import {Element} from "../../core/models/element.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})

export class ElementComponent implements  OnInit{
  @Input() element!: Element;
  element$!: Observable<Element> // @todo use this

  cards!: any[];

  card!: any;

  markers: any[] = [];
  center: any = {
    lat: 48.68439921578848,
    lng:6.188186803578728
  };

  constructor(private elementService: ElementService) {
  }

  ngOnInit() {
    this.cards = this.elementService.cards;
    this.card = this.cards[0];
    console.log(this.card);

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


}