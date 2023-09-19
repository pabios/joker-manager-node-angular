import {Component, OnInit} from '@angular/core';
import {CountryService} from "../../../core/services/country.service";
import {map, Observable} from "rxjs";
import { AsyncPipe } from '@angular/common';
import {CategoryService} from "../../../core/services/category.service";
import {Category} from "../../../core/models/category.model";
import {Router} from "@angular/router";



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  region$!: Observable<any>;
  category$!: Observable<Category[]>

  constructor(
    private countryService: CountryService,
    private catergoryService: CategoryService,
    private router:Router
  ){

  }
  ngOnInit(): void {
    this.region$ = this.countryService.getAllRegion().pipe(
      map(data => data['name'])
    )

    //
    this.category$ = this.catergoryService.getAllCategory();

  }


  goViewAllElem():void{
    this.router.navigateByUrl('/elements/list').then(r => '');
  }

}
