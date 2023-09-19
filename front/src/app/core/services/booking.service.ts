import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }
  /**
   * nouvelle enregistrement
   * @param formData
   */
  add(formData:FormData):Observable<any>{
    return this.http.post<any>(`${environment.urlApi}/booking/add`,formData)
  }
}
