import {Component, OnInit, TemplateRef} from '@angular/core';
import {ElementService} from "../../core/services/element.service";
import {Observable} from "rxjs";
import {Root} from "../../core/models/element.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NotificationService} from "../../core/services/notification.service";
import {NgIfContext} from "@angular/common";


@Component({
  selector: 'app-search-global',
  templateUrl: './search-global.component.html',
  styleUrls: ['./search-global.component.scss']
})
export class SearchGlobalComponent implements OnInit{
  elements$!:Observable<Root[]>

  inputValue?: string;
  options: Array<{rep:string; value: string; content:string;count: number; id: number; name: string; }>  = [];


  // options!: any[];
  selectedOptionId!: number;

  constructor(
    private elementService:ElementService,
    private router: Router,
    private route: ActivatedRoute,
    private notificationService:NotificationService,
  ) {
  }
  ngOnInit(): void {
    this.elements$ = this.elementService.getAllElements();
    this.selectedOptionId = 0;
  }


  onChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    if(value){
      console.log(this.options.length)
    }
    if (value.trim() === "") {
      this.notificationService.showInfo("Aucun mot-clé saisi.", "");
    }
    this.elements$.subscribe((elements) => {
      this.options = elements
        .filter((element) => {
          return (
            element.name.includes(value) ||
            element.content.includes(value) ||
            element.description.includes(value) ||
            element.locate.includes(value) ||
            element.price.toString().includes(value)
          );
        })
        .map((element) => ({
          value,
          name: element.name,
          rep: `${element.name} A ${element.locate} prix ${element.price} `,
          count: this.countTermOccurrences(element, value),
          id: parseInt(element.id, 10),
          content: element.content,
        }));
    });
  }

  countTermOccurrences(element: Root, term: string): number {
    // Compte le nombre d'occurrences du terme dans les propriétés de l'élément
    const elementProperties = [element.name, element.content, element.description, element.locate, element.price];
    let termCount = 0;
    const termLowerCase = term.toLowerCase(); // Convertir le terme en minuscules pour une correspondance insensible à la casse

    for (const property of elementProperties) {
      if (typeof property === 'string') {
        const words = property.toLowerCase().split(' ');
        for (const word of words) {
          if (word.includes(termLowerCase)) {
            termCount++;
          }
        }
      } else if (typeof property === 'number') {
        // Convertir le nombre en chaîne de caractères pour rechercher le terme
        const propertyStr = property.toString().toLowerCase();
        if (propertyStr.includes(termLowerCase)) {
          termCount++;
        }
      }
    }

    return termCount;
  }



  currentId!:number;

  goFirstResult():void {
    console.log(this.selectedOptionId)

     this.route.params.subscribe(params => {
       this.currentId = +params['id']
      if(this.selectedOptionId == +params['id']){

      }



    });

    if(this.selectedOptionId  == 0){
      this.notificationService.showInfo("Vous devez choisir parmi nos suggestions de recherche.","Votre terme")
      return;
    }

    if (this.options.length > 0 && this.selectedOptionId != 0) {
      this.router.navigateByUrl(`/elements/${this.selectedOptionId}`).then(()=>{
        location.reload()
      } );
    }

    //...




  }

  setSelectedId(id: number) {
    this.selectedOptionId = id;
  }


  setOptionRep(): TemplateRef<NgIfContext<boolean>> | null {
    this.options[0].rep = "Aucun logement pour ce critère de recherche."

    return null; // Retourne un TemplateRef vide ou null
  }
}
