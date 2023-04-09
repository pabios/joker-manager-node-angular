import {Component, OnInit} from '@angular/core';
import {CountryService} from "../../../core/services/country.service";
import {map, Observable} from "rxjs";
import { AsyncPipe } from '@angular/common';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  region$!: Observable<any>;

  constructor(private countryService: CountryService){

  }
  ngOnInit(): void {
    this.region$ = this.countryService.getAllRegion().pipe(
      map(data => data['name'])
    )
  }


}
