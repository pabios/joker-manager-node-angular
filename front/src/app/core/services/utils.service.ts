import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {NotificationService} from "./notification.service";
import {Site} from "../models/site.model";
import {sha512} from "js-sha512";
import {MatPaginatorIntl} from "@angular/material/paginator";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  // filtre
  isVisibleSearch = false;
  isOkLoading = false;
  //

  constructor(private http: HttpClient,private notifService:NotificationService) {
  }

  sendEmail(msg:string) {
    const recipientEmail = 'monimbagroup@gmail.com'; // Remplacez par l'adresse email de votre choix
    const subject = 'monimba.com'; // Remplacez par le sujet de l'email
    const body = msg; // Remplacez par le contenu de l'email

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink);
  }
  sendWhatsapp(numeroTelephone:string,message:string){

    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelephone}&text=${encodeURIComponent(message)}`;

    window.open(urlWhatsApp, '_blank');
  }
  decifer512(chaine:string){
    return sha512.hmac(environment.token, chaine);
  }
  customPaginator() {
    const customPaginatorIntl = new MatPaginatorIntl();

    customPaginatorIntl.itemsPerPageLabel = 'Logement par page:';

    return customPaginatorIntl;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisibleSearch = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisibleSearch = false;
  }

  showSearchModal() {
    this.isVisibleSearch = true;
  }

  oneNotifMustDisplay(message:string,title:string){
    this.notifService.showSuccess(message,title)
  }


  likesSite(value:string,siteId:string):Observable<any>{ // si 0 decremente et si 1 increment
    const formData = new FormData();
    formData.append('value',  value);
    formData.append('site_id', environment.siteId);

    return this.http.post<any>(`${environment.urlApi}/site/like/add`,formData)
  }

  getSite(id:number) {
    return this.http.get<Site>(`${environment.urlApi}/site/${id}`);
  }
}
