import { Component, OnInit } from '@angular/core';
import {BookingService} from "../../core/services/booking.service";
import {delay, Observable} from "rxjs";
import {Booking} from "../../core/models/booking.model";
import {ElementService} from "../../core/services/element.service";
import {Root} from "../../core/models/element.model";
// import format from "@popperjs/core/lib/utils/format";
import { format } from 'date-fns-tz';
import {NotificationService} from "../../core/services/notification.service";


@Component({
  selector: 'app-welcome',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.scss']
})
export class ProfilsComponent implements OnInit {
  data = [
    {
      name: 'Balde'
    }
  ];

  visible = false;

  //
  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London'
    }
  ];
  bookings$!: Observable<Booking[]>;
  elements$!: Observable<Root[]>;
  delete$!: Observable<any>;
  //
  isDeleteButtonDisabled = false;


  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
  constructor(
    private bookingService:BookingService,
    private elementService:ElementService,
    private notificationService:NotificationService
  ) {
  }

  ngOnInit() {
    this.bookings$ = this.bookingService.getBookingByUserId(1);
    this.elements$ = this.elementService.getElementByUserId(1);



        //this.notificationService.showSuccess("Bien supprimé", "Déjà approuvé");

  }


  sendEmails() {
    const url = 'https://mail.google.com';
    window.open(url);
  }
  sendEmail() {
    const recipientEmail = 'monimbagroup@gmail.com'; // Remplacez par l'adresse email de votre choix
    const subject = 'Vérification'; // Remplacez par le sujet de l'email
    const body = 'Envoyer nous votre pièce d\'identité en pièce Jointe'; // Remplacez par le contenu de l'email

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink);
  }

  deleteBookingById(bookingId: any) {
    const id = typeof bookingId === 'string' ? parseInt(bookingId, 10) : bookingId;

    this.delete$ = this.bookingService.remove(parseInt(bookingId));

    this.delete$.subscribe(res =>{
      console.log(res)
    })
    this.isDeleteButtonDisabled = true;

    if(this.isDeleteButtonDisabled){
       window.location.reload();
    }

  }

  deleteElementById(elementId: any) {

    const id = typeof elementId === 'string' ? parseInt(elementId, 10) : elementId;

    this.delete$ = this.elementService.remove(parseInt(elementId));

    this.delete$.subscribe(res =>{
      console.log(res)
    })

    this.isDeleteButtonDisabled = true;

    if(this.isDeleteButtonDisabled){
      window.location.reload();
    }

  }
  formatBookingDate(dateString: string): string {
    const date = new Date(dateString); // Convertissez la chaîne en objet Date
    const formattedDate = format(date, "dd MMMM yyyy 'à' HH'h'mm'min'", { timeZone: 'Europe/Paris' });
    return `${formattedDate}`;
  }

}
