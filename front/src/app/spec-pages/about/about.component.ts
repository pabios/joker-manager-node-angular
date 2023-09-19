import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SpecPagesService} from "../service/spec-pages.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  pageContent!:string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private specPagesService: SpecPagesService) { }

  ngOnInit() {
    // const page = this.specPagesService.getPageByName("Articles");
    // console.log(page?.content);

    // Récupérez le nom de la page à partir des paramètres de l'URL
    this.route.params.subscribe(params => {
      const pageName = params['articleName'];
      console.log(pageName)

      // Utilisez le service pour récupérer la page par son nom
      const page = this.specPagesService.getPageByName(pageName);

      // Vérifiez si la page existe et accédez à son contenu
      if (page) {
        this.pageContent = page.content;
        console.log(this.pageContent)
      } else {
        this.pageContent = 'Page non trouvée';
      }
    });

  }


}
