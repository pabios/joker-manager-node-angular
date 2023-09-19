import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ItemType} from "../models/Piece.model";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private http: HttpClient) {
  }

  getAllItems(): Observable<ItemType[]> {
    return this.http.get<[]>(`${environment.urlApi}/items`)
  }
}
