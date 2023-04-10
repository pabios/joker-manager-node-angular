import {Component, OnInit} from '@angular/core';
import {CarouselConfig} from "ngx-bootstrap/carousel";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss'],
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
export class ElementComponent implements OnInit {
  markers: any[] = [];
  center: any = {
    lat: 48.68439921578848,
    lng:6.188186803578728
  };
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});


  cards: any[] = [
    {
      "id": 1,
      "type": "Appartement",
      "description": "Superbe appartement de luxe avec vue sur la ville, 3 chambres, 2 salles de bain, cuisine équipée, salon spacieux, parking sécurisé.",
      "price": "120 000",
      "location": "Conackry, kipee",
      "verified": "1",
      "stars":"4",
      "images":[
        {
          id:1,
          src: 'https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=60,format=auto/sources/images/scientist/persov6/Gates-1000.jpg',
        },
        {
          id:2,
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg/520px-Bill_Gates_-_Nov._8%2C_2019.jpg',

        },
        {
          id:3,
          src: 'https://www.babelio.com/users/AVT_Steve-Jobs_8163.jpg',
        },
        {
          id:3,
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKDlhyG4y70hTVIESUYSQ75mdVppnz3MMZrjV3JO1g8cw3jEwfSj__Tu1tO5O2FA6w9o&usqp=CAU',
        }
      ]
    },
    {
      "id": 2,
      "type": "Hotel",
      "description": "Superbe Hotel de luxe avec vue sur la ville, 3 chambres, 2 salles de bain, cuisine équipée, salon spacieux, parking sécurisé.",
      "price": "20 000",
      "location": "Conackry, kipee",
      "verified": "1",
      "stars":"4",
      "images":[
        {
          id:1,
          src: 'https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=60,format=auto/sources/images/scientist/persov6/Gates-1000.jpg',
        },
        {
          id:2,
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg/520px-Bill_Gates_-_Nov._8%2C_2019.jpg',

        },
        {
          id:3,
          src: 'https://www.babelio.com/users/AVT_Steve-Jobs_8163.jpg',
        },
        {
          id:3,
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKDlhyG4y70hTVIESUYSQ75mdVppnz3MMZrjV3JO1g8cw3jEwfSj__Tu1tO5O2FA6w9o&usqp=CAU',
        }
      ]
    },


    {
      "id": 3,
      "type": "Appartement",
      "description": "Superbe appartement de luxe avec vue sur la ville, 3 chambres, 2 salles de bain, cuisine équipée, salon spacieux, parking sécurisé.",
      "price": "30 000",
      "location": "Conackry, kipee",
      "verified": "1",
      "stars":"4",
      "images":[
        {
          id:1,
          src: 'https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=60,format=auto/sources/images/scientist/persov6/Gates-1000.jpg',
        },
        {
          id:2,
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg/520px-Bill_Gates_-_Nov._8%2C_2019.jpg',

        },
        {
          id:3,
          src: 'https://www.babelio.com/users/AVT_Steve-Jobs_8163.jpg',
        },
        {
          id:3,
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKDlhyG4y70hTVIESUYSQ75mdVppnz3MMZrjV3JO1g8cw3jEwfSj__Tu1tO5O2FA6w9o&usqp=CAU',
        }
      ]
    },

    {
      "id": 4,
      "type": "Appartement",
      "description": "Superbe appartement de luxe avec vue sur la ville, 3 chambres, 2 salles de bain, cuisine équipée, salon spacieux, parking sécurisé.",
      "price": "420 000",
      "location": "Conackry, kipee",
      "verified": "1",
      "stars":"4",
      "images":[
        {
          id:1,
          src: 'https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=60,format=auto/sources/images/scientist/persov6/Gates-1000.jpg',
        },
        {
          id:2,
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg/520px-Bill_Gates_-_Nov._8%2C_2019.jpg',

        },
        {
          id:3,
          src: 'https://www.babelio.com/users/AVT_Steve-Jobs_8163.jpg',
        },
        {
          id:3,
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKDlhyG4y70hTVIESUYSQ75mdVppnz3MMZrjV3JO1g8cw3jEwfSj__Tu1tO5O2FA6w9o&usqp=CAU',
        }
      ]
    },

    {
      "id": 5,
      "type": "Appartement",
      "description": "Superbe appartement de luxe avec vue sur la ville, 3 chambres, 2 salles de bain, cuisine équipée, salon spacieux, parking sécurisé.",
      "price": "520 000",
      "location": "Conackry, kipee",
      "verified": "1",
      "stars":"4",
      "images":[
        {
          id:1,
          src: 'https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=60,format=auto/sources/images/scientist/persov6/Gates-1000.jpg',
        },
        {
          id:2,
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg/520px-Bill_Gates_-_Nov._8%2C_2019.jpg',

        },
        {
          id:3,
          src: 'https://www.babelio.com/users/AVT_Steve-Jobs_8163.jpg',
        },
        {
          id:3,
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKDlhyG4y70hTVIESUYSQ75mdVppnz3MMZrjV3JO1g8cw3jEwfSj__Tu1tO5O2FA6w9o&usqp=CAU',
        }
      ]
    },

    {
      "id": 6,
      "type": "Appartement",
      "description": "Superbe appartement de luxe avec vue sur la ville, 3 chambres, 2 salles de bain, cuisine équipée, salon spacieux, parking sécurisé.",
      "price": "620 000",
      "location": "Conackry, kipee",
      "verified": "1",
      "stars":"4",
      "images":[
        {
          id:1,
          src: 'https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=60,format=auto/sources/images/scientist/persov6/Gates-1000.jpg',
        },
        {
          id:2,
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg/520px-Bill_Gates_-_Nov._8%2C_2019.jpg',

        },
        {
          id:3,
          src: 'https://www.babelio.com/users/AVT_Steve-Jobs_8163.jpg',
        },
        {
          id:3,
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKDlhyG4y70hTVIESUYSQ75mdVppnz3MMZrjV3JO1g8cw3jEwfSj__Tu1tO5O2FA6w9o&usqp=CAU',
        }
      ]
    }
  ]


  pageSize!:number; // Nombre de cartes par page
  currentPage = 0; // Page actuelle
  currentCards: any[] = [];
  pageSizeOptions!: number[];

  ngOnInit() {
    this.pageSize = 3;
    this.setPageSizeOptions();

    this.addMarker();


    this.slides[0] = {
      id:1,
      src: 'https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=60,format=auto/sources/images/scientist/persov6/Gates-1000.jpg',
    };
    this.slides[1] = {
      id:2,
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg/520px-Bill_Gates_-_Nov._8%2C_2019.jpg',
    }
    this.slides[2] = {
      id:3,
      src: 'https://www.babelio.com/users/AVT_Steve-Jobs_8163.jpg',
    },
      this.slides[3] = {
      id:4,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKDlhyG4y70hTVIESUYSQ75mdVppnz3MMZrjV3JO1g8cw3jEwfSj__Tu1tO5O2FA6w9o&usqp=CAU',
      }
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

