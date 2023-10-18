import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {combineLatest, map, Observable, startWith} from "rxjs";
import {StateService} from "../../services/state-service";
import {StateModel} from "../models/State";
import {Router} from "@angular/router";
import {FormBuilder, FormControl} from "@angular/forms";
import {StateSearchType} from "../../enums/states-search-type.enum";
import {Images} from "../../../core/models/element.model";
import {environment} from "../../../../environments/environment";
import {ImageService} from "../../../core/services/imageService";

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



  searchCtrl!: FormControl;
  searchTypeCtrl!: FormControl;
  dateDebutCtrl!:FormControl;
  dateFinCtrl!:FormControl


  searchTypeOptions!:{
    value: StateSearchType,
    label: string
  }[]



  protected readonly close = close;
  size: any;
  visible: any;
  title: any;

  constructor(private stateService: StateService,
              private router:Router,
              private formBuilder:FormBuilder,
              private imageService: ImageService
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
    //




  }

  private initForm(){
    this.searchCtrl = this.formBuilder.control('');
    this.searchTypeCtrl = this.formBuilder.control(StateSearchType.LOCATE);

    this.dateDebutCtrl = this.formBuilder.control(null);
    this.dateFinCtrl = this.formBuilder.control(null);

    this.searchTypeOptions = [
      {value:StateSearchType.LOCATE, label:'Localisation'},
      {value:StateSearchType.PRICE, label:'Prix'},
    ]
  }

  private  initObservable(){
    this.loading$ = this.stateService.loading$;
    const search$ = this.searchCtrl.valueChanges.pipe(
      startWith(this.searchCtrl.value),
      map(value => value.toLowerCase())
    );
    const searchType$: Observable<StateSearchType> = this.searchTypeCtrl.valueChanges.pipe(
      startWith(this.searchTypeCtrl.value)
    );

    const dateDebut$ = this.dateDebutCtrl.valueChanges.pipe(
      startWith(this.dateDebutCtrl.value)
    );

    const dateFin$ = this.dateFinCtrl.valueChanges.pipe(
      startWith(this.dateFinCtrl.value)
    );



    // this.elements$ = combineLatest([
    //     search$,
    //     searchType$,
    //     dateDebut$,
    //     dateFin$,
    //     this.stateService.states$
    //   ]
    // ).pipe(
    //   map(([search, searchType,dateDebut, dateFin, elements]) => elements.filter(element => element[searchType]
    //     .toString()
    //     .toLowerCase()
    //     .includes(search as string))
    //   )
    // );

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
   this.router.navigateByUrl(`elements/${id}`).then(r => '')
  }


}
