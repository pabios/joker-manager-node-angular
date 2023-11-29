import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Injectable} from "@angular/core";
import {ElementType} from "../models/elementType.model";

@Injectable({
  providedIn: 'root'
})
export class ElementTypeService{

  constructor(private http: HttpClient) {
  }

  getAllElementType(): Observable<ElementType[]> {
    return this.http.get<[]>(`${environment.urlApi}/elementType`)
  }
}
