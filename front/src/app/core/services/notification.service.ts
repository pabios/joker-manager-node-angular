import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
// import Pusher from "pusher-js";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  info!: string;

  constructor(private toastr: ToastrService,
              private http:HttpClient) {
    // Pusher.logToConsole = true;
    //
    // var pusher = new Pusher('2e4bc757da112b198aaf', {
    //   cluster: 'eu'
    // });

    // this.channel = pusher.subscribe('pabiosoft');
    // this.channel.bind('my-event',  (data:string) => {
    //   //console.log(data);
    //   this.info = data;
    // });

  }



  showSuccess(message:string, title:string){
    this.toastr.success(message, title)
  }

  showError(message:string, title:string){
    this.toastr.error(message, title)
  }

  showInfo(message:string, title:string){
    this.toastr.info(message, title)
  }

  showWarning(message:string, title:string){
    this.toastr.warning(message, title)
  }



}
