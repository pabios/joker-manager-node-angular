import {Component, OnInit} from '@angular/core';
import {CountryService} from "../../../core/services/country.service";
import {map, Observable} from "rxjs";
import { AsyncPipe } from '@angular/common';
import {CategoryService} from "../../../core/services/category.service";
import {Category} from "../../../core/models/category.model";
import {Router} from "@angular/router";
import {UtilsService} from "../../../core/services/utils.service";
import {GoogleAnalyticsService} from "ngx-google-analytics";
import {environment} from "../../../../environments/environment";



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  region$!: Observable<any>;
  category$!: Observable<Category[]>
  avatarLogo!:string;


  array = ["BASSE GUINEE",
    "MOYENNE GUINEE",
    "HAUTE GUINEE",
    "GUINEE FORESTIERE"];
  effect = 'scrollx';

  constructor(
    private countryService: CountryService,
    private catergoryService: CategoryService,
    protected utilsService: UtilsService,
    private router:Router,
    private gaService: GoogleAnalyticsService
  ){

  }
  ngOnInit(): void {
    this.region$ = this.countryService.getAllRegion().pipe(
      map(data => data['name'])
    )

    //
    this.category$ = this.catergoryService.getAllCategory();
    //
    this.avatarLogo = environment.backend+"/public/img/avatar-nimba.png"
  }


  goViewAllElem():void{
    this.router.navigateByUrl('/elements/list').then(r => '');
  }

}
