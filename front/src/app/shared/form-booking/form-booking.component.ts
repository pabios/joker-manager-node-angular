import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, UntypedFormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {BookingService} from "../../core/services/booking.service";

//
import {render} from "creditcardpayments/creditCardPayments";
import {NotificationService} from "../../core/services/notification.service";
import {Booking} from "../../core/models/booking.model";

@Component({
  selector: 'app-form-booking',
  templateUrl: './form-booking.component.html',
  styleUrls: ['./form-booking.component.scss']
})
export class FormBookingComponent {

  @Input() booking!: Booking[] ;

  form!: FormGroup;
  elementId!: any;
  userId!:any;
  price!:any
  priceItem!:any
  nbPeople!:any
  priceTotal!:any
  newBeginDate!:any
  newEndDate!:any


  minDate: any;
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

      // this.priceItem = sessionStorage.getItem("price");
      this.booking?.forEach(b =>{
        this.priceItem = b.price;
      })
    let item: any;

    // if (this.priceItem && typeof this.priceItem === "string") {
    //   item = JSON.parse(this.priceItem);
    // }
    //
    // if (item) {
    //   this.price = item;
    //   console.log(this.price);
    //   console.log("bonjour item")
    // }

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

    // this.price.valueChanges.subscribe(() => {
    //   this.calculateTotalPrice();
    // });

    // this.nbPeople.valueChanges.subscribe(() => {
    //   this.calculateTotalPrice();
    // });

    //

  }




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

//=====================================
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

    disabledDates  (date:  Date | null) {
      const arrayOfDate: { beginDate: Date, endDate: Date }[] = [];
      console.log('+++++++========+++++++=++++++++++++++++==========')

      console.log(this.booking)
      this.booking.forEach(booking => {
        const beginDate = new Date(booking.beginDate);
        const endDate = new Date(booking.endDate);

        arrayOfDate.push({ beginDate, endDate });
      });
      console.log('==================')
      console.log(
        date !== null &&
        arrayOfDate.some(book => date >= book.beginDate && date <= book.endDate)
      );


    if (date === null) {
      return false;
    }else{
      console.log( arrayOfDate.some(book => date >= book.beginDate && date <= book.endDate))

    }

    return arrayOfDate.some(book => date >= book.beginDate && date <= book.endDate);
  }

  arrayOfDatesBooked = [
    new Date("09/28/2023"),
  ];

  parseToEnglishDate(date:string){
    let parts = date.split(" ");
    let datePart = parts[0].split("-");
    let year = datePart[0];
    let month = datePart[1];
    let day = datePart[2];
    return `${month}/${day}/${year}`
  }

  myHolidayFilter = (d: Date | null): boolean => {
    this.booking.forEach(booking => {
      const startDate = new Date(this.parseToEnglishDate(booking.beginDate));
      const endDate = new Date(this.parseToEnglishDate(booking.endDate));
      for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
        this.arrayOfDatesBooked.push(new Date(currentDate));
      }
    });
    if(d == null){
      return false;
    }
    const time=d.getTime();
    return !this.arrayOfDatesBooked.find(x=>x.getTime()==time);
  }
//=====================================

}
