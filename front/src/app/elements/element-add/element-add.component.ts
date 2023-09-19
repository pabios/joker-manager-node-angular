import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {NotificationService} from "../../core/services/notification.service";

@Component({
  selector: 'app-element-add',
  templateUrl: './element-add.component.html',
  styleUrls: ['./element-add.component.scss']
})
export class ElementAddComponent {

  constructor(private router: Router,
              ) { }

  ngOnInit(){

  }

}
