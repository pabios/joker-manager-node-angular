import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import { Images} from "../models/element.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient) {}
  getImagesForElement(elementId: any): Observable<Images[]> {
    elementId =  parseInt(elementId, 10)
    const url = `${environment.urlApi}/image/eimg`;

   const data = {
                    "id": elementId
                  }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<Images[]>(url, JSON.stringify(data));
  }


}
