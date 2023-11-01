import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {Category} from "../../core/models/category.model";
import {CountryService} from "../../core/services/country.service";
import {CategoryService} from "../../core/services/category.service";
import {UtilsService} from "../../core/services/utils.service";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  region$!: Observable<any>;
  category$!: Observable<Category[]>
  api_url!:string;
  showPageHeader: boolean = false;
  constructor(private countryService: CountryService,
              private catergoryService: CategoryService,
              protected utilsService: UtilsService,
              private router:Router,) {
  }
  ngOnInit(): void {

    this.region$ = this.countryService.getAllRegion().pipe(
      map(data => data['name'])
    )
    //
    this.category$ = this.catergoryService.getAllCategory();
    //
    this.api_url = environment.backend+"/"
    //
    this.showPageHeader = this.router.url !== '/';
  }
}
