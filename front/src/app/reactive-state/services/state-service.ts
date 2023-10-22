import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, delay, map, Observable, tap} from "rxjs";
import { StateModel} from "../components/models/State";
import {Root} from "../../core/models/element.model";
import {environment} from "../../../environments/environment";

@Injectable()
export class StateService{
  constructor(private http: HttpClient) {
  }

  private _loading$ = new BehaviorSubject<boolean>(false);
  get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  private _states$ = new BehaviorSubject<StateModel[]>([]);
  get states$(): Observable<StateModel[]> {
    return this._states$.asObservable();
  }

  private setLoadingStatus(loading:boolean){
    this._loading$.next(loading)
  }
  private lastElementsLoad = 0;

  getElementsFromServer(){
    if(Date.now() - this.lastElementsLoad <= 300000){ // moins de 5 min
      return;
    }
    this.setLoadingStatus(true);
    this.http.get<StateModel[]>(`${environment.urlApi}/element/search`).pipe(
      delay(1000),
      tap(elements =>{
        this.lastElementsLoad = Date.now();
        this._states$.next(elements);
        this.setLoadingStatus(false)
      })
    ).subscribe()
  }

  getElementById(id: number): Observable<StateModel> {
    return this.states$.pipe(
      map(elements => elements.filter(elm => elm.id === id)[0])
    );
  }

}
