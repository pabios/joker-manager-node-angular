import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CountryService{
  constructor(private http:HttpClient) {
  }

  getAllRegion(): Observable<any> {
    return this.http.get<any>(`${environment.url}/api/gn/regions`);
  }
}
