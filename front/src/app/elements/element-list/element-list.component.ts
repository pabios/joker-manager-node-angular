import {Component, OnInit} from '@angular/core';
import {CarouselConfig} from "ngx-bootstrap/carousel";
import {PageEvent} from "@angular/material/paginator";
import {ElementService} from "../../core/services/element.service";
import {catchError, concatMap, forkJoin, map, mergeMap, Observable, of, switchMap, take} from "rxjs";
import {Images, Root} from "../../core/models/element.model";
import {ImageService} from "../../core/services/imageService";

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

//september

  elements$!: Observable<Root[]>
  images$!: Observable<Images[][]>
  imagesList: Images[] = [];
  numberOfElements!:number;


  constructor(
    private elementService: ElementService,
    private imageService: ImageService
  ) {
  }



  ngOnInit() {
    this.elements$ = this.elementService.getAllElements();

    this.cards = this.elementService.cards;

    // this.pageSizeOptions = [2,4,6,8];
    // total posts
    this.elements$.pipe(
      map(element => element.length)
    ).subscribe(count => {
      this.numberOfElements = count;
    });

    this.pageSize = 3;
    this.setPageSizeOptions();

    this.addMarker();
    //


    // Utilisez switchMap pour traiter chaque élément et obtenir ses images
    this.elements$.pipe(
      switchMap((elements: Root[]) => {
        // Créez un tableau d'observables pour obtenir les images de chaque élément
        const observables: Observable<Images[]>[] = elements.map((element: Root) => {
          const elementId: number = Number(element.id);
          return this.imageService.getImagesForElement(elementId);
        });

        // Comptez le nombre d'éléments
          this.numberOfElements = elements.length;
        console.log('Nombre d\'éléments :', this.numberOfElements);

        // Utilisez forkJoin pour attendre que toutes les requêtes se terminent
        return forkJoin(observables);
      })
    ).subscribe((imagesArrays: Images[][]) => {
      // imagesArrays contient les tableaux d'images de chaque élément
      // Vous pouvez maintenant les concaténer dans imagesList si nécessaire
      imagesArrays.forEach((images: Images[]) => {
        this.imagesList = this.imagesList.concat(images);
      });

      // Appelez la fonction de préchargement ici
      const imageUrlsToPreload = this.imagesList.map(image => image.url);
      this.preloadImages(imageUrlsToPreload);


      console.log(this.imagesList);
    });

  }

  filterImagesByElement(element: Root) {
    return this.imagesList.filter(image => image.elementId === element.id);
  }

  preloadImages(imageUrls: string[]) {
    imageUrls.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
    });
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
  getCardsForPageCard() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    return this.cards.slice(start, end);
  }
  getCardsForPage(element: Root[]) {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    return element.slice(start, end);
  }


  onPageChange(event: PageEvent) {
    // this.currentPage = event.pageIndex;
    // this.pageSize = event.pageSize;
    // const start = this.currentPage * event.pageSize;
    // const end = start + event.pageSize;
    // this.currentCards = this.cards.slice(start, end);

    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }
  setPageSizeOptions() {
    // Adjust the pageSizeOptions based on the number of faceSnaps in the observable
    this.elements$.pipe(
      take(1),
      map((faceSnaps: string | any[]) => {
        if (faceSnaps.length > 100) {
          this.pageSizeOptions = [4, 8, 25, 100];
        } else if (faceSnaps.length > 25) {
          this.pageSizeOptions = [4, 8, 25];
        } else if (faceSnaps.length >= 6) {
          this.pageSizeOptions = [4, 6];
        } else {
          this.pageSizeOptions = [4];
        }
      })
    ).subscribe();
  }

  // setPageSizeOptions() {
  //   if (this.numberOfElements > 30) {
  //     this.pageSizeOptions = [3, 6, 25, 30];
  //   } else if (this.numberOfElements > 25) {
  //     this.pageSizeOptions = [3, 6, 25];
  //   } else if (this.numberOfElements >= 6) {
  //     this.pageSizeOptions = [3, 6];
  //   } else {
  //     this.pageSizeOptions = [3];
  //   }
  // }

}

