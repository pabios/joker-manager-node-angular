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
import {SpecPagesService} from "../../../spec-pages/service/spec-pages.service";
import {CookieService} from "ngx-cookie-service";
import {Site} from "../../../core/models/site.model";



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  region$!: Observable<any>;
  category$!: Observable<Category[]>
  site$!:Observable<Site>;
  newLike$!:Observable<any>

  pages!: { name: string,imageUrl:string,content: string }[]
  avatarLogo!:string;
  //
  api_url!:string;
  //
  isLiked: boolean = false;
  isLikedCookies!: string;
  likeCount!: number;




  array = ["BASSE GUINEE",
    "MOYENNE GUINEE",
    "HAUTE GUINEE",
    "GUINEE FORESTIERE"];
  effect = 'scrollx';

  loading = false;
  listData = new Array(1).fill({}).map((_i, index) => ({
    href: '/',
    title: `Mamadou Siradjo `,
    avatar: 'assets/img/pdg.png',
    description: 'PDG de monimba',
    content:' Trouver un logement  stable et décent ou un foncier reste une expérience très difficile et partagée par de nombreux guinéens et visiteurs de notre pays. C’est avec ce constat que nous avons ressenti le besoin pressant de créer une entreprise permettant de pallier ce problème et rendre notre pays très attractif. Notre objectif est de vous offrir plus qu’une simple plateforme de réservation, nous vous offrons un espace où vous trouverez des biens immobiliers et fonciers en vente. \n' +
      'En Guinée, la chaleur de l\'hospitalité est légendaire, et nous souhaitons étendre cette hospitalité à travers chaque logement que vous trouverez ici. Que vous soyez un autochtone, un voyageur curieux ou un hôte désireux de partager son espace, vous trouverez votre bonheur chez nous.\n'

  }));

  listDataBanner = new Array(1).fill({}).map((_i, index) => ({
    href: '/',
    title: `confort et la fiabilité `,
    avatar: 'assets/img/pdg.png',
    description: 'PDG de monimba',
    content:'Transformez l\'expérience de trouver un logement en une aventure sans stress. Faites-nous confiance pour dénicher votre oasis de tranquillité au cœur de la Guinée'
  }));

  constructor(
    private countryService: CountryService,
    private catergoryService: CategoryService,
    protected utilsService: UtilsService,
    private router:Router,
    private gaService: GoogleAnalyticsService,
    private specPageService: SpecPagesService,
    private cookieService: CookieService,
  ){

  }
  ngOnInit(): void {
    this.region$ = this.countryService.getAllRegion().pipe(
      map(data => data['name'])
    )

    //
    this.category$ = this.catergoryService.getAllCategory();
    //
    this.avatarLogo = environment.backend+"/public/img/avatar-nimba.png";
    //
    this.api_url = environment.backend+"/"
    //
    this.pages = this.specPageService.pages;
    //
    this.site$ = this.utilsService.getSite(Number(environment.siteId));

     this.utilsService.getSite(Number(environment.siteId)).subscribe(site=>{
      this.likeCount = site.likes;
      }
    )
    //
    this.isLikedCookies =  this.cookieService.get('isLiked')

    if(this.isLikedCookies && this.isLikedCookies == "false"){
      this.isLiked = false;
    }else if(this.isLikedCookies == "true"){
      this.isLiked = true;
    }else{
      this.isLiked = false;
    }

  }


  goViewAllElem():void{
    this.router.navigateByUrl('/elements/list').then(r => '');
  }

  likes(): void {
    this.isLiked = !this.isLiked;

    console.log(String(this.isLiked))
    let expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    //

   // const isLikedCookie = this.cookieService.get('isLiked');
      if (this.isLiked) {
        this.likeCount++;
      } else {
       this.likeCount--;
      }
      console.log(String(this.likeCount));
      this.newLike$ = this.utilsService.likesSite(String(this.likeCount),environment.siteId);
      this.newLike$.subscribe(res=>{
        console.log(res)
      })


      this.cookieService.set('isLiked', String(this.isLiked), expirationDate);
  }
}
