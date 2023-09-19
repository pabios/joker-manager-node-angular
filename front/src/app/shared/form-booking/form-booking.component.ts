import { Component } from '@angular/core';
import {FormControl, FormGroup, UntypedFormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {BookingService} from "../../core/services/booking.service";

//
import {render} from "creditcardpayments/creditCardPayments";
import {NotificationService} from "../../core/services/notification.service";

@Component({
  selector: 'app-form-booking',
  templateUrl: './form-booking.component.html',
  styleUrls: ['./form-booking.component.scss']
})
export class FormBookingComponent {

  form!: FormGroup;
  elementId!: any;
  userId!:any;
  price!:any
  priceItem!:any
  nbPeople!:any
  priceTotal!:any
  newBeginDate!:any
  newEndDate!:any
  constructor(private  formBuilder: UntypedFormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private bookingService:BookingService,
              private notificationService:NotificationService
              ) {


  }


  ngOnInit(){


    //
    this.userId = 1;
    this.elementId = +this.activatedRoute.snapshot.params['id'];

      this.priceItem = sessionStorage.getItem("price");
    let item: any;

    if (this.priceItem && typeof this.priceItem === "string") {
      item = JSON.parse(this.priceItem);
    }

    if (item) {
      this.price = item;
      console.log(this.price);
      console.log("bonjour item")
    }

//
    let amount = this.priceItem
    render(
      {
        id:"#myPaypalButtons",
        currency:"USD",
        value:amount,
        onApprove:(details)=>{
          alert('paypayl ok ')
        }
      }
    )
    this.form = this.formBuilder.group({
        nbPeople:new FormControl(0),
        beginDate:  new FormControl(new Date()), // Utilisation de new FormControl()
        endDate:  new FormControl(new Date()),
        price: new FormControl(0),
        priceTotal:new FormControl(0),

      elementId: this.elementId,
      userId:this.userId
      },{
        updateOn: 'blur' // formulaire mis a jours lorsqu'on change de champs
      }

    );

    this.price.valueChanges.subscribe(() => {
      this.calculateTotalPrice();
    });

    this.nbPeople.valueChanges.subscribe(() => {
      this.calculateTotalPrice();
    });

    //


  }

  // {
//            "nbPeople": 2,
//            "beginDate": "2023-09-20T12:00:00+00:00",
//            "endDate": "2023-09-21T12:00:00+00:00",
//            "price": 200,
//            "priceTotal": 400,
//            "elementId": 3,
//            "userId": 1
//        }

  public pricing(event:HTMLInputElement){
    this.price = event.value;
  }
  public onDateChangeBegin(event: MatDatepickerInputEvent<Date>) {
    const beginDate = event.value;

    console.log('Teste', beginDate);

    this.newBeginDate = beginDate;
  }
  public onDateChangeEnd(event: MatDatepickerInputEvent<Date>) {
    console.log('Teste', event.value);
   this.newEndDate = event.value
  }


  calculateTotalPrice() {
    this.priceTotal = this.price.value * this.nbPeople.value;
  }

  onSend(nbPeople: any,price:any){

    const beginDateValue = this.form.get('beginDate')
    const endDateValue = this.form.get('endDate');
    console.log(beginDateValue)

    console.log(nbPeople)
     // this.priceTotal
    console.log('est le nb peupleeeee')

    const formData : FormData = new FormData();
    formData.append('nbPeople',nbPeople)
    formData.append('price',price)
    formData.append('priceTotal',price)
    formData.append('beginDate',this.newBeginDate.toISOString())
    formData.append('endDate',this.newEndDate.toISOString())
    formData.append('elementId',this.elementId)
    formData.append('userId',this.userId)

    console.log(formData.get('beginDate'))
    console.log(formData.get('endDate'))

    this.bookingService.add(formData).subscribe(
      (response) => {
        // Traitez la réponse du serveur ici
        console.log('Réponse du serveur :', response);
        this.notificationService.showSuccess(response,"cool")


      },
      (error) => {
        // Traitez les erreurs ici
        console.error('Erreur lors de l\'envoi des données au serveur :', error);
        this.notificationService.showError(error,"error")

      }
    );

    // this.notificationService.showInfo("response","succes")

    sessionStorage.clear();
    // this.router.navigateByUrl('/readme');
  }



}
