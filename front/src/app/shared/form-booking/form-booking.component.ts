import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, UntypedFormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {BookingService} from "../../core/services/booking.service";

//
import {render} from "creditcardpayments/creditCardPayments";
import {NotificationService} from "../../core/services/notification.service";
import {Booking} from "../../core/models/booking.model";
import {Root} from "../../core/models/element.model";
import {AuthService} from "../../core/services/auth.service";
import {CoucheDbService} from "../../core/services/coucheDb.service";

@Component({
  selector: 'app-form-booking',
  templateUrl: './form-booking.component.html',
  styleUrls: ['./form-booking.component.scss']
})
export class FormBookingComponent {

  @Input() booking!: Booking[] ;
  @Input() element!: Root ;

  form!: FormGroup;
  formCouchdb!:FormGroup;
  tabOfCoucheDb: any[] = [];
  sallesRows: any[] = [];



  elementId!: any;
  userId!:any;
  price!:any
  priceItem!:any
  nbPeople!:any
  priceTotal!:any
  newBeginDate!:any
  newEndDate!:any
  //
  loading = false;
  erreurBooking: { status: boolean, msg: string }[] = [];



  minDate: any;
  constructor(private  formBuilder: UntypedFormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private bookingService:BookingService,
              private notificationService:NotificationService,
              private auth:AuthService
              ) {
  }



  ngOnInit(){


    //
    this.userId = this.auth.getUserId()
    this.elementId = +this.activatedRoute.snapshot.params['id'];

      // this.priceItem = sessionStorage.getItem("price");
      this.booking?.forEach(b =>{
        this.priceItem = b.price;
      })


//  PAYPAL
//     let amount = this.priceItem
//     render(
//       {
//         id:"#myPaypalButtons",
//         currency:"USD",
//         value:amount,
//         onApprove:(details)=>{
//           alert('paypayl ok ')
//         }
//       }
//     )
//  PAYPAL


    // this.form = this.formBuilder.group({
    //     nbPeople:new FormControl(0),
    //     beginDate:  new FormControl(new Date()), // Utilisation de new FormControl()
    //     endDate:  new FormControl(new Date()),
    //     price: new FormControl(0),
    //     priceTotal:new FormControl(0),
    //
    //   elementId: this.elementId,
    //   userId:this.userId
    //   },{
    //     updateOn: 'blur' // formulaire mis a jours lorsqu'on change de champs
    //   }
    // );

    this.form = this.formBuilder.group({
      nbPeople: [0, [Validators.required, Validators.min(1)]], // Validator.required pour champ obligatoire et Validators.min pour valeur minimale
      beginDate: [new Date(), Validators.required],
      endDate: [new Date(), Validators.required],
      price: [0, Validators.required],
      priceTotal: [0, Validators.required],
      elementId: [this.elementId, Validators.required],
      userId: [this.userId, Validators.required]
    }, {
      updateOn: 'blur'
    });

      // couche db
    // this.formCouchdb = this.formBuilder.group({
    //   idSalle: ['', Validators.required],
    //   nameSalle: ['', Validators.required],
    //   idEtage: ['', Validators.required]
    // });

   // this.getDocuments();



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

  /*
  onSendCouch(idSalle: string, idEtage: string, nameSalle: string) {

    const formData : FormData = new FormData();
    formData.append('idSalle',idSalle)
    formData.append('nameSalle',nameSalle)
    formData.append('idEtage',idEtage)


    this.bookingService.addInCouchdb(formData).subscribe(
      (response) => {

        // this.router.navigateByUrl('/profils').then(() => {
        //   this.notificationService.showSuccess(response,'')
        //   window.location.reload();
        // });
          this.notificationService.showSuccess(response,'bien jouer')


      },
      (error) => {
        // Traitez les erreurs ici
        this.notificationService.showError(error,"")

        this.loading = false;
        this.erreurBooking.push({ status: true, msg: "cette erreur c'est produite" });

      });

  }
  */

  onSend(nbPeople: any){

    const beginDateValue = this.form.get('beginDate')
    const endDateValue = this.form.get('endDate');

    //
    if (this.form.valid) {
       console.log('tout va bien')
    } else {
      this.erreurBooking.push({ status: true, msg: "Une erreur s'est produite : les dates et le nombre de personnes sont requis. " });
    }
    //
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);

    //

    const formData : FormData = new FormData();
    formData.append('nbPeople',nbPeople)
    formData.append('price',this.element.price.toString())
    formData.append('priceTotal',this.element.price.toString())
    formData.append('beginDate',this.newBeginDate.toISOString())
    formData.append('endDate',this.newEndDate.toISOString())
    formData.append('elementId',this.elementId)
    formData.append('userId',this.userId)


    setTimeout(() => {
      //
      this.bookingService.add(formData).subscribe(
        (response) => {

          this.router.navigateByUrl('/profils').then(() => {
            this.notificationService.showSuccess(response,'')
            window.location.reload();
          });
        },
        (error) => {
          // Traitez les erreurs ici
          // console.error('Erreur lors de l\'envoi des données au serveur :', error);
          this.notificationService.showError(error,"")

          this.loading = false;
          // Ajouter un nouvel élément à erreurBooking
          this.erreurBooking.push({ status: true, msg: "cette erreur c'est produite" });



        }
      );
    }, 2000);


    // this.notificationService.showInfo("response","succes")

    // sessionStorage.clear();
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


  arrayOfDatesBooked:Date[] = [
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



  // COUCHE DB
  // onSendCouch() {
  //   if (this.formCouchdb.valid) {
  //     const idSalle = this.formCouchdb.get('idSalle')?.value;
  //     const nameSalle = this.formCouchdb.get('nameSalle')?.value;
  //     const idEtage = this.formCouchdb.get('idEtage')?.value;
  //
  //     this.loading = true;
  //
  //     // Utilisation du service pour ajouter une salle
  //     this.coucheDbService.createDocument(
  //       { idSalle, nameSalle, idEtage },
  //       idSalle
  //     ).subscribe(
  //       response => {
  //         console.log('Document ajouté avec succès :', response);
  //         this.loading = false;
  //       },
  //       error => {
  //         console.error('Erreur lors de l\'ajout du document :', error);
  //         this.loading = false;
  //       }
  //     );
  //   }
  // }

  // getDocuments() {
  //   this.coucheDbService.getAllDocuments().subscribe(
  //     documents => {
  //       this.tabOfCoucheDb = documents;
  //       // Faites quelque chose avec this.tabOfCoucheDb, par exemple, transmettez-le à votre composant enfant
  //       this.sallesRows.push(documents.rows);
  //       console.log(this.sallesRows);
  //
  //       // Boucle sur this.sallesRows et passe les IDs à la fonction getOneDoucments
  //       for (const row of this.sallesRows) {
  //         for (const salle of row) {
  //           // Supposons que 'id' est le champ qui contient l'ID du document
  //           this.getOneDoucments(salle.id);
  //         }
  //       }
  //     },
  //     error => {
  //       console.error('Erreur lors de la récupération des documents :', error);
  //     }
  //   );
  // }


  //


  // getOneDoucments(id: any) {
  //   this.coucheDbService.getDocument(id).subscribe(
  //     doc => {
  //       this.tabOfCoucheDb = this.tabOfCoucheDb || [];
  //       this.tabOfCoucheDb[id] = doc;
  //       console.log('bonjoure tabOfCoucheDb')
  //       console.log(this.tabOfCoucheDb)
  //     },
  //     error => {
  //       console.error('Erreur lors de la récupération du document :', error);
  //     }
  //   );
  // }
  //
  // getObjectValues(obj: any): any[] {
  //   return Object.values(obj);
  // }
  // getObjectKeys(obj: any): string[] {
  //   return Object.keys(obj);
  // }


}
