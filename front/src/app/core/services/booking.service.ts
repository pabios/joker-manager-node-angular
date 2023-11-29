import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Root} from "../models/element.model";
import {Booking} from "../models/booking.model";
import {BookingElement} from "../models/booking-element.model";

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

  getBookingByElementId(elementId: number): Observable<Booking[]>{ //@todo created  slug properties
    return this.http.get<Booking[]>(`${environment.urlApi}/booking/element/${elementId}`)
  }

  getBookingByUserId(userId: number): Observable<BookingElement[]>{ //@todo created  slug properties
    return this.http.get<BookingElement[]>(`${environment.urlApi}/bookings/user/${userId}`)
  }
  remove(bookingId: number): Observable<any>{ //@todo created  slug properties
    return this.http.get<any>(`${environment.urlApi}/booking/delete/${bookingId}`)
  }

  addInCouchdb(formData: FormData) {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('root:root'),
      'withCredentials': 'true',
      'Content-Type': 'application/json'
    });

    const jsonData = JSON.stringify({
      name: "le nom",
      age: "l age",
      city: "la ville"
    })

    return this.http.get<any>('http://localhost:5984/salles/005', { headers });
  }

}
