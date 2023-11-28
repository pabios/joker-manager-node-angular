import { Component, OnInit } from '@angular/core';
import {BookingService} from "../../core/services/booking.service";
import {delay, Observable} from "rxjs";
import {Booking} from "../../core/models/booking.model";
import {ElementService} from "../../core/services/element.service";
import {Root} from "../../core/models/element.model";
// import format from "@popperjs/core/lib/utils/format";
import { format } from 'date-fns-tz';
import {NotificationService} from "../../core/services/notification.service";
import {AuthService} from "../../core/services/auth.service";
import {User} from "../../core/models/user.model";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {BookingElement} from "../../core/models/booking-element.model";
import {ConfirmationService, MessageService} from "primeng/api";


@Component({
  selector: 'app-welcome',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.scss'],
  providers: [ConfirmationService, MessageService]
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
  bookings$!: Observable<BookingElement[]>;
  elements$!: Observable<Root[]>;
  user$!: Observable<User>;
  delete$!: Observable<any>;
  //
  isDeleteButtonDisabled = false;
  avatar!:string;
  nimbaBadge!:string;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
  constructor(
    private bookingService:BookingService,
    private elementService:ElementService,
    private notificationService:NotificationService,
    private auth: AuthService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
  }

  ngOnInit() {
    let curentIdUser = Number(this.auth.getUserId());

    this.bookings$ = this.bookingService.getBookingByUserId(curentIdUser);
    this.elements$ = this.elementService.getElementByUserId(curentIdUser);
    console.log(curentIdUser)
    console.log("est le user loger")
    //
    this.user$ = this.auth.getUserById(curentIdUser);
    this.avatar = environment.backend+"/";
    //
    this.nimbaBadge = "nimba"




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

  protected readonly length = length;

  goAddHouse() {
    this.router.navigateByUrl('elements/add')
  }

  goElements() {
    this.router.navigateByUrl('elements')
  }



  getFirstWords(description: string, numWords: number): string {
    const words = description.split(' ');
    const slicedWords = words.slice(0, numWords);
    return slicedWords.join(' ');
  }

  confirm(event: Event,elementId:any) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Êtes-vous sûrs ?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel:'Oui',
      rejectLabel:'Non',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmer', detail: 'On la retirer pour vous' });

        // const id = typeof elementId === 'string' ? parseInt(elementId, 10) : elementId;

        this.delete$ = this.elementService.remove(parseInt(elementId));

        this.delete$.subscribe(res =>{
          //console.log(res)
        })

        this.isDeleteButtonDisabled = true;

        if(this.isDeleteButtonDisabled){
          window.location.reload();
        }

      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'D\'acoord', detail: 'on la garde' });
      }
    });
  }

  confirmDeleteElement(event: Event,elementId:any) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Êtes-vous sûrs ?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Oui',
      rejectLabel: 'Non',
      accept: () => {
        this.messageService.add({severity: 'info', summary: 'Confirmer', detail: 'On la supprimer pour vous'});

        this.delete$ = this.elementService.remove(parseInt(elementId));

        this.delete$.subscribe(res =>{
          //console.log(res)
        })

        this.isDeleteButtonDisabled = true;

        if(this.isDeleteButtonDisabled){
          window.location.reload();
        }

      },
      reject: () => {
        this.messageService.add({severity: 'error', summary: 'D\'acoord', detail: 'on la garde'});
      }
    });

  }

}
