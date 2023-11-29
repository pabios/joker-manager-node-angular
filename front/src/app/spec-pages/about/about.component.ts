import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SpecPagesService} from "../service/spec-pages.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  pageContent!:string;
  avatarLogo!:string;
  pageName!:string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private specPagesService: SpecPagesService) { }

  ngOnInit() {
    // const page = this.specPagesService.getPageByName("Articles");
    // console.log(page?.content);

    // console.log(this.specPagesService.getConfidentialite())

    // Récupérez le nom de la page à partir des paramètres de l'URL
    this.route.params.subscribe(params => {
        console.log("bonjour le monde le monde le monde")
        this.pageName = params['articleName'];
      // console.log(this.pageName)

      // Utilisez le service pour récupérer la page par son nom
      const page = this.specPagesService.getPageByName(this.pageName);

      // Vérifiez si la page existe et accédez à son contenu
      if (page) {
        this.pageContent = page.content;
        this.avatarLogo = "./assets/img/"+page.imageUrl

      } else {
        this.pageContent = 'Page non trouvée';
      }
    });
    //


    //
    // this.avatarLogo = environment.backend+"/public/img/avatar-nimba.png"
  }


}
