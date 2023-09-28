import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) {
  }

  siteId =  parseInt(environment.siteId , 10)



  getAllStyle(): Observable<any> {
    return this.http.get<any[]>(`${environment.urlApi}/style/${environment.siteId}`, )
  }
}
