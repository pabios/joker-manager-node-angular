import {Component, Input, OnInit} from '@angular/core';
import {BookingService} from "../../core/services/booking.service";
import {delay, Observable} from "rxjs";
import {Booking} from "../../core/models/booking.model";
import {ElementService} from "../../core/services/element.service";
import {Images, Root} from "../../core/models/element.model";
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
  selector: 'app-pub',
  templateUrl: './pub.html',
  styleUrls: ['./pub.scss'],
  providers: [ConfirmationService, MessageService]
})
export class Pub implements OnInit {
  @Input() salles!: any[];
  @Input() salle: any = {}; // Supposons que salles soit un objet



  constructor(
    private elementService:ElementService,
    private auth: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {
  }

  ngOnInit() {

    //this.elements$ = this.elementService.getElementByUserId(curentIdUser);

    console.log('dans app-salle')

    console.log(this.salles)

  }

}
