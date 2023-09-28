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

  }

  private initForm(){
    this.searchCtrl = this.formBuilder.control('');
    this.searchTypeCtrl = this.formBuilder.control(StateSearchType.NAME);
    this.searchTypeOptions = [
      {value:StateSearchType.NAME, label:'Nom'},
      {value:StateSearchType.LOCATE, label:'Localisation'},
      {value:StateSearchType.CONTENT, label:'Contenue'}
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
    this.elements$ = combineLatest([
        search$,
        searchType$,
        this.stateService.states$
      ]
    ).pipe(
      map(([search, searchType, elements]) => elements.filter(element => element[searchType]
        .toLowerCase()
        .includes(search as string))
      )
    );


  }

  goSingle(id: number){
   this.router.navigateByUrl(`elements/${id}`).then(r => '')
  }


}
