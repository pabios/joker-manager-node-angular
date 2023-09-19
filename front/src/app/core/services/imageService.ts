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

    //const data = "23"

   const data = {
                    "id": elementId
                  }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${environment.token}`
    });

    // return this.http.post<any>(url, data, {headers});
    return this.http.post<Images[]>(url, JSON.stringify(data));
    // return this.http.post<Images[]>(url, JSON.stringify(data)).pipe(
    //   catchError(() => of([])) // Retourne un tableau vide en cas d'erreur
    // );
  }


}
