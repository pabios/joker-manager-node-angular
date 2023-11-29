import { Component } from '@angular/core';
import {ElementService} from "../../core/services/element.service";
import {ActivatedRoute} from "@angular/router";
import {Root} from "../../core/models/element.model";
import {Observable} from "rxjs";
import {BookingService} from "../../core/services/booking.service";
import {Booking} from "../../core/models/booking.model";
import { startOfDay, endOfDay } from 'date-fns'; // Importez les fonctions startOfDay et endOfDay depuis date-fns

interface ngOnInit {
}

@Component({
  selector: 'app-booking-add',
  templateUrl: './booking-add.component.html',
  styleUrls: ['./booking-add.component.scss']
})
export class BookingAddComponent implements ngOnInit{
  private elementId!: number;
  element$!: Observable<Root>;
  bookings$!: Observable<Booking[]>;


  //dateCell: (current: Date) => nzCalendarModeChangeObservable<string | TemplateRef<string>> | string;


  arrayOfDate: { beginDate: Date, endDate: Date }[] = [];
  disabledDates: Date[] = [];
  bookings!: Booking[];
  constructor(
    private elementService: ElementService,
    private bookingService: BookingService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.elementId  = +params['id']; // Convertir en nombre
    });

    console.log(this.elementId)

    this.element$ = this.elementService.getElementById(this.elementId);
    this.bookings$ = this.bookingService.getBookingByElementId(this.elementId);


    // Obtenez les réservations pour l'élément spécifié
    this.bookingService.getBookingByElementId(this.elementId).subscribe(bookings => {
      this.bookings = bookings;

      // Obtenez le tableau de dates désactivées
      this.arrayOfDate = this.disablePeriode(this.bookings);

      // Désactivez les dates dans le calendrier
      this.disabledDates = this.arrayOfDate.map(date => date.beginDate);
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      // hour: 'numeric',
      // minute: 'numeric'
    };
    return new Intl.DateTimeFormat('fr-FR', options).format(date);
  }

  // Supposons que beginDate et endDate sont définis dans votre modèle.
  beginDate: Date = new Date('2023-09-27');
  endDate: Date = new Date('2023-09-29');

  // Fonction pour vérifier si une date est désactivée
  isDisabledDate = (current: Date): boolean => {
    return current < startOfDay(this.beginDate) || current > endOfDay(this.endDate);
  };

  isDateInRange(date: Date, beginDate: Date, endDate: Date): boolean {
    return date >= beginDate && date <= endDate;
  }


  listDataMap = {
    eight: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' }
    ],
    ten: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' },
      { type: 'error', content: 'This is error event.' }
    ],
    booked: [
      { type: 'warning', content: 'prise' },
    ]
  };

  //=====================================
  visible = false;
  size: 'large' | 'default' = 'default';
  titre= 'Calendrier';
  get title(): string {
    return `${this.titre}`;
  }

  showLarge(): void {
    this.size = 'large';
    this.open();
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  //=====================================

  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 2023;
    }
    return null;
  }
  disablePeriode(bookings: Booking[]) {
    const arrayOfDate: { beginDate: Date, endDate: Date }[] = [];

    bookings.forEach(booking => {
      const beginDate = new Date(booking.beginDate);
      const endDate = new Date(booking.endDate);

      arrayOfDate.push({ beginDate, endDate });
    });

    console.log(arrayOfDate)
   return arrayOfDate;
  }

  //   convertDatesToDateObjects(bookings: Booking[]): void {
  //   bookings.forEach(booking => {
  //     booking.beginDate = new Date(booking.beginDate);
  //     booking.endDate = new Date(booking.endDate);
  //   });
  // }
  // isDateWithinRange(date: Date, lesDates: []): boolean {
  //
  //   lesDates.forEach(booking => {
  //     booking.beginDate = new Date(booking.beginDate);
  //     booking.endDate = new Date(booking.endDate);
  //   });
  //
  //   // return date >= beginDate && date <= endDate;
  // }

}
