import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ItemType} from "../models/Piece.model";
import {Chat} from "../models/chat.model";
import {FormGroup} from "@angular/forms";
import {UtilsService} from "./utils.service";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private http: HttpClient,private utilsService: UtilsService) {
  }

  getAllMessageByUser(userId:number): Observable<Chat[]> {
    return this.http.get<[]>(`${environment.urlApi}/message/user/${userId}`)
  }
  addMessage(userId:number,receiverId:number,content:string){
    const formData = new FormData();
    formData.append('userId', String(userId));
    formData.append('receiverId', String(receiverId));
    formData.append('content', content);

    // if(String(receiverId) == environment.adminId){
    //   this.utilsService.sendWhatsapp("+330758743200","vous avec recu un message sur monimba");
    // }

    return this.http.post<any>(`${environment.urlApi}/message/add`,formData)
  }

}
