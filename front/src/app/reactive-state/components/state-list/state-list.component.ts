import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {combineLatest, forkJoin, map, Observable, startWith, Subscription} from "rxjs";
import {StateService} from "../../services/state-service";
import {StateModel} from "../models/State";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {StateSearchType} from "../../enums/states-search-type.enum";
import {Images} from "../../../core/models/element.model";
import {environment} from "../../../../environments/environment";
import {ImageService} from "../../../core/services/imageService";
import {UtilsService} from "../../../core/services/utils.service";

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StateListComponent implements OnInit{

  loading$!: Observable<boolean>
  elements$!: Observable<StateModel[]>

  imagesList: Images[] = [];
  api_url!:string;
//
  dateFormat = 'yyyy/MM/dd';



  // searchCtrl!: string | null;
  // searchTypeCtrl!:  string | null;
  // dateDebutCtrl!:Date;
  // dateFinCtrl!:Date

  // old logic

  searchCtrl!: FormControl
  searchTypeCtrl!: FormControl;
  dateDebutCtrl!:FormControl;
  dateFinCtrl!:FormControl


  searchTypeOptions!:{
    value: StateSearchType,
    label: string
  }[]



   validateForm = this.formBuilder.group({
     dateDebutCtrl: [null], // Vous pouvez initialiser avec null ou toute autre valeur par défaut
     dateFinCtrl: [null], // Vous pouvez initialiser avec null ou toute autre valeur par défaut
    searchTerm: [''], // Vous pouvez initialiser avec une chaîne vide ou toute autre valeur par défaut
    choix: [''] // Vous pouvez initialiser avec une chaîne vide ou toute autre valeur par défaut
  });

  playsholerSearch!:string;
  iconSearch!:string;

  // fin ng zoroo


  protected readonly close = close;
  size: any;
  visible: any;
  title: any;
  charger!: any;

  constructor(private stateService: StateService,
              private router:Router,
              private formBuilder:FormBuilder,
              private imageService: ImageService,
              private fb: NonNullableFormBuilder,
              public utilsService:UtilsService
              ) {
  }

  ngOnInit():void{
    this.initForm();
    this.loading$ = this.stateService.loading$;
    this.initObservable();
    this.stateService.getElementsFromServer();
    //
    this.api_url = environment.backend+"/";
    //
    this.size = "768px";
    this.visible = true;
    this.title = "le drawer"
    this.charger = (): string => `Filtrer`;

    //
    // this.utilsService.isVisibleSearch = true;




    // debut ng zorro

  // send form une fois a garder pour new book
    // this.validateForm = this.fb.group({
    //   rangePicker: [null, Validators.required],
    //   searchTerm: ['', [Validators.required]],
    //   choix: ['', [Validators.required]],
    // });
    //
    // this.formValueChangesSubscription = this.validateForm.valueChanges.subscribe(formValues => {
    //   const rangePickerValue: Date[] | null = formValues.rangePicker !== undefined ? formValues.rangePicker : null;
    //
    //   const searchTermValue: string = formValues.searchTerm !== undefined ? formValues.searchTerm : '';
    //   const choixValue: string = formValues.choix ?? '';
    //
    //   // Utilisez les valeurs comme bon vous semble
    //   console.log('Range Picker Value:', rangePickerValue);
    //   console.log('Search Term Value:', searchTermValue);
    //   console.log('Choix Value:', choixValue);
    // });
    // send form une fois a garder pour new book


  }

  truncateDescription(description: string): string {
    const words = description.split(' ');
    if (words.length > 3) {
      return words.slice(0, 3).join(' ') + '...';
    }
    return description;
  }

private initForm(){
    this.searchCtrl = this.formBuilder.control(''); // remplace par ng zorro le searcheTeme
    this.searchTypeCtrl = this.formBuilder.control(StateSearchType.LOCATE); // remplace par le ng zorro le gender

    this.dateDebutCtrl = this.formBuilder.control(null);
    this.dateFinCtrl = this.formBuilder.control(null);

    this.searchTypeOptions = [
      {value:StateSearchType.LOCATE, label:'Localisation'},
      {value:StateSearchType.PRICE, label:'Prix'},
    ]
  //
  // this.playsholerSearch = 'filtre par';
  }

  private  initObservable(){
    this.loading$ = this.stateService.loading$;
    const search$ = this.searchCtrl.valueChanges.pipe(
      startWith(this.searchCtrl.value),
      map(value => value.toLowerCase())
    );
    const searchType$: Observable<StateSearchType> = this.searchTypeCtrl.valueChanges.pipe(
      startWith(this.searchTypeCtrl.value),
      map(res => {
        if(res== StateSearchType.LOCATE){
          this.playsholerSearch = 'filtre par Ville'
          this.iconSearch= 'environment'
        }else{
          this.playsholerSearch = 'filtre par Prix'
          this.iconSearch = 'dollar'

        }
        return res; // Assurez-vous de retourner la valeur pour que d'autres observateurs puissent la recevoir si nécessaire
      })
    );


    const dateDebut$ = this.dateDebutCtrl.valueChanges.pipe(
      startWith(this.dateDebutCtrl.value)
    );

    const dateFin$ = this.dateFinCtrl.valueChanges.pipe(
      startWith(this.dateFinCtrl.value)
    );




    this.elements$ = combineLatest([
      search$,
      searchType$,
      dateDebut$,
      dateFin$,
      this.stateService.states$
    ]).pipe(
      map(([search, searchType, dateDebut, dateFin, elements]) => {
        return elements.filter(element => {
          const searchLower = search.toString().toLowerCase();
          const elementValue = element[searchType]?.toString().toLowerCase();
          const dateDebutValid = !( !dateDebut || (element.beginDate && new Date(element.beginDate) < new Date(dateDebut))  );
          const dateFinValid = !( !dateFin || (element.endDate && new Date(element.endDate) > new Date(dateFin)) );

          // Condition pour vérifier les dates de début et de fin saisies
          const dateDebutSaisiValide = !dateDebut || !element.beginDate || new Date(element.beginDate) < new Date(dateDebut);
          const dateFinSaisiValide = !dateFin || !element.endDate || new Date(element.endDate) > new Date(dateFin);

          return elementValue.includes(searchLower) && dateDebutValid && dateFinValid && dateDebutSaisiValide && dateFinSaisiValide;
        });
      })
    );
  }

    parseCustomDate(dateString: string): Date {
    const [datePart, timePart] = dateString.split(' ');
    const [year, month, day] = datePart.split('-');
    const [hour, minutes, seconds] = timePart.split(':');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minutes), parseInt(seconds));
  }

  goSingle(id: number){
    if (id) {
      this.router.navigateByUrl(`elements/${id}`).then(() => {
        this.utilsService.isVisibleSearch = false;
        // this.location.replaceState(`elements/${id}`);
        location.reload();
      });
    } else {
      // Handle the case where ID is not provided
      // Redirect or handle as needed
    }

  }



}
