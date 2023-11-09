import {Injectable, OnInit} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SpecPagesService implements OnInit{

  // private pages: { name: string, content: string }[] = [
  //   {
  //     name: "Articles",
  //     content: "Structure des Logements à Publier\n" +
  //       "\n" +
  //       "Lorsque vous publiez un logement sur notre site, il est essentiel de fournir des informations complètes et précises pour aider les voyageurs à prendre une décision éclairée. La structure typique d'une annonce de logement comprend les éléments suivants :\n" +
  //       "\n" +
  //       "Titre de l'Annonce : Un titre clair et attractif pour attirer l'attention des voyageurs.\n" +
  //       "Description : Une description détaillée du logement, y compris sa taille, ses caractéristiques, son emplacement et tout ce qui le rend unique.\n" +
  //       "Photos : Des images de haute qualité qui montrent toutes les parties du logement, y compris les chambres, la cuisine, la salle de bains et les espaces communs. Plus il y a de photos, mieux c'est.\n" +
  //       "Tarifs : Le prix par nuit ou par séjour, ainsi que les éventuels frais supplémentaires, tels que les frais de nettoyage ou de service.\n" +
  //       "Calendrier de Disponibilité : Un calendrier mis à jour indiquant les dates disponibles pour la réservation.\n" +
  //       "Équipements : Une liste des équipements et des services disponibles, comme le Wi-Fi, la climatisation, une cuisine entièrement équipée, etc.\n" +
  //       "Règles de la Maison : Les règles que les voyageurs doivent suivre pendant leur séjour, comme les heures de silence, les politiques de fumer, etc.\n" +
  //       "Contact du Propriétaire : Vos coordonnées ou un moyen de contact pour répondre aux questions des voyageurs et gérer les réservations.\n" +
  //       "Commentaires et Évaluations : Les avis et les évaluations des voyageurs précédents, s'ils sont disponibles."
  //   },
  //   {
  //     name: "Fonctionnement-du-site",
  //     content: "Comment fonctionne notre site\n" +
  //       "\n" +
  //       "Inscription\n" +
  //       "\n" +
  //       "Pour commencer à utiliser notre site et profiter de ses fonctionnalités, vous devez d'abord vous inscrire. Voici comment cela fonctionne :\n" +
  //       "\n" +
  //       "Cliquez sur le bouton \"S'inscrire\" en haut de la page.\n" +
  //       "Renseignez vos informations personnelles, telles que votre nom, votre adresse e-mail et un mot de passe sécurisé.\n" +
  //       "Validez votre inscription en cliquant sur \"S'inscrire\".\n" +
  //       "Vous recevrez un e-mail de confirmation pour activer votre compte.\n" +
  //       "Connectez-vous avec votre nom d'utilisateur et votre mot de passe pour accéder à votre compte.\n" +
  //       "Publication de logements\n" +
  //       "\n" +
  //       "Une fois que vous êtes connecté à votre compte, vous pouvez publier des logements disponibles à la location. Voici comment procéder :\n" +
  //       "\n" +
  //       "Accédez à votre tableau de bord.\n" +
  //       "Cliquez sur \"Publier un logement\".\n" +
  //       "Renseignez les détails de votre logement, tels que son emplacement, sa description, ses photos et son tarif.\n" +
  //       "Validez la publication de votre logement.\n" +
  //       "Votre logement sera désormais visible pour les utilisateurs qui souhaitent le réserver.\n" +
  //       "Réservation de logements\n" +
  //       "\n" +
  //       "Les utilisateurs de notre site peuvent réserver des logements qui les intéressent. Voici comment cela fonctionne :\n" +
  //       "\n" +
  //       "Parcourez les logements disponibles sur notre site.\n" +
  //       "Cliquez sur un logement pour voir plus de détails.\n" +
  //       "Si le logement vous convient, sélectionnez les dates de séjour souhaitées et cliquez sur \"Réserver\".\n" +
  //       "Vous serez redirigé vers un formulaire de réservation où vous pourrez confirmer les détails de votre séjour.\n" +
  //       "Une fois la réservation confirmée, le propriétaire du logement sera notifié et pourra accepter ou décliner la réservation.\n" +
  //       "Une fois la réservation acceptée, vous recevrez une confirmation par e-mail avec les informations de contact du propriétaire."
  //   },
  //   {
  //     name: "Donnees-et-confidentialite",
  //     content: "Confidentialité et Sécurité des Données : Nous accordons une grande importance à la confidentialité et à la sécurité de vos données personnelles. Toutes les informations que vous partagez avec nous lors de votre inscription seront traitées de manière confidentielle. Nous utilisons des mesures de sécurité avancées pour protéger vos données contre tout accès non autorisé ou toute utilisation abusive. Vos informations ne seront en aucun cas vendues, échangées ou partagées avec des tiers sans votre consentement explicite.\n" +
  //       "Responsabilités de l'Utilisateur : En vous inscrivant sur notre plateforme, vous acceptez de fournir des informations précises, complètes et à jour. Vous êtes responsable de la confidentialité de votre compte et de vos identifiants de connexion. Vous vous engagez à ne pas partager votre compte avec d'autres personnes. Vous acceptez également de respecter nos règles d'utilisation et de ne pas publier de contenu offensant, diffamatoire ou illégal sur notre plateforme.\n" +
  //       "Modifications des Conditions Générales : Nos conditions générales d'inscription peuvent être sujettes à des modifications périodiques. Nous nous réservons le droit de mettre à jour ou de modifier ces conditions à tout moment, sans préavis. Il est de votre responsabilité de vérifier régulièrement ces conditions pour rester informé des éventuelles modifications. En continuant à utiliser notre service après toute modification apportée à ces conditions, vous acceptez les nouvelles conditions générales."
  //
  //   },
  //   {
  //     name: "Charte-qualite",
  //     content:  `
  //         Bienvenue sur Monimba, votre plateforme de confiance pour la réservation de logements de qualité. Nous nous engageons à vous offrir une expérience exceptionnelle tout au long de votre séjour. Notre charte qualité résume nos engagements envers nos utilisateurs.
  //         1. Qualité et Confort : Nous sélectionnons avec soin chaque logement pour vous assurer un séjour confortable. Tous les logements disponibles sur Monimba répondent à des normes de qualité élevées et sont régulièrement inspectés pour garantir votre satisfaction.
  //
  //         2. Transparence et Fiabilité : Nous croyons en la transparence totale. Les informations sur chaque logement, y compris les photos, les équipements et les services disponibles, sont précises et à jour. Vous pouvez faire confiance à la fiabilité des informations fournies sur notre plateforme.
  //
  //         3. Confidentialité et Sécurité des Données : Nous accordons une grande importance à la confidentialité et à la sécurité de vos données personnelles. Toutes les informations que vous partagez avec nous sont traitées de manière confidentielle. Nous utilisons des mesures de sécurité avancées pour protéger vos données contre tout accès non autorisé ou toute utilisation abusive.
  //
  //         4. Responsabilités de l'Utilisateur : En vous inscrivant sur notre plateforme, vous acceptez de fournir des informations précises, complètes et à jour. Vous êtes responsable de la confidentialité de votre compte et de vos identifiants de connexion. Vous vous engagez à ne pas partager votre compte avec d'autres personnes et à respecter nos règles d'utilisation. Tout contenu offensant, diffamatoire ou illégal ne sera pas toléré.
  //
  //         5. Support Client Réactif : Notre équipe de support client est disponible pour répondre à toutes vos questions et préoccupations. Nous nous efforçons de résoudre rapidement tous les problèmes que vous pourriez rencontrer lors de votre utilisation de notre plateforme.
  //
  //         6. Modifications des Conditions Générales : Nos conditions générales d'utilisation peuvent être sujettes à des modifications périodiques. Nous nous réservons le droit de mettre à jour ou de modifier ces conditions à tout moment, sans préavis. Il est de votre responsabilité de vérifier régulièrement ces conditions pour rester informé des éventuelles modifications. En continuant à utiliser notre service après toute modification apportée à ces conditions, vous acceptez les nouvelles conditions générales.
  //
  //         Nous vous remercions de faire confiance à Monimba pour vos réservations de logements. Nous sommes là pour rendre votre séjour aussi agréable que possible. Si vous avez des questions ou des commentaires, n'hésitez pas à nous contacter. Bon séjour sur Monimba !
  //               `
  //   }
  // ];

  confidentialite!:string;
  contentFonctionnement!:string;
  contentCharte!:string;
  contentArticle!:string;


  pages = [
    {name: "Charte-qualite",imageUrl:"quality.jpg",content:this.getCharte()},
    {name: "Donnees-et-confidentialite",imageUrl:"quality.jpg",content:this.getConfidentialite()},
    {name: "Fonctionnement-du-site",imageUrl:"fonctionnement.jpg",content:this.getFonctionnement()},
    {name: "Articles",imageUrl:"articles.png",content:this.getArticles()}
  ];
  constructor() {
  }
  getPages() {
    return this.pages;
  }



  getPageByName(name: string) {
    return this.pages.find(page => page.name === name);
  }

  ngOnInit(): void {
    this.contentCharte = this.getCharte();
    this.contentArticle = this.getArticles();
    this.contentFonctionnement = this.getFonctionnement();
    this.confidentialite = this.getConfidentialite();
  }

  getArticles(){
    return `
          <div class="container">
          <h2>Structure des Logements à Publier</h2>
          <p>Lorsque vous publiez un logement sur notre site, il est essentiel de fournir des informations complètes et précises pour aider les voyageurs à prendre une décision éclairée. La structure typique d'une annonce de logement comprend les éléments suivants :</p>
          <ul>
              <li><strong>Titre de l'Annonce :</strong> Un titre clair et attractif pour attirer l'attention des voyageurs.</li>
              <li><strong>Description :</strong> Une description détaillée du logement, y compris sa taille, ses caractéristiques, son emplacement et tout ce qui le rend unique.</li>
              <li><strong>Photos :</strong> Des images de haute qualité qui montrent toutes les parties du logement, y compris les chambres, la cuisine, la salle de bains et les espaces communs. Plus il y a de photos, mieux c'est.</li>
              <li><strong>Tarifs :</strong> Le prix par nuit ou par séjour, ainsi que les éventuels frais supplémentaires, tels que les frais de nettoyage ou de service.</li>
              <li><strong>Calendrier de Disponibilité :</strong> Un calendrier mis à jour indiquant les dates disponibles pour la réservation.</li>
              <li><strong>Équipements :</strong> Une liste des équipements et des services disponibles, comme le Wi-Fi, la climatisation, une cuisine entièrement équipée, etc.</li>
              <li><strong>Règles de la Maison :</strong> Les règles que les voyageurs doivent suivre pendant leur séjour, comme les heures de silence, les politiques de fumer, etc.</li>
              <li><strong>Contact du Propriétaire :</strong> Vos coordonnées ou un moyen de contact pour répondre aux questions des voyageurs et gérer les réservations.</li>
              <li><strong>Commentaires et Évaluations :</strong> Les avis et les évaluations des voyageurs précédents, s'ils sont disponibles.</li>
          </ul>
      </div>
    `
  }
  getCharte(){
   return  `
    <div class="container">
      <div class="content">
        <p><strong>1. Qualité et Confort :</strong> Nous sélectionnons avec soin chaque logement pour vous assurer un séjour confortable. Tous les logements disponibles sur Monimba répondent à des normes de qualité élevées et sont régulièrement inspectés pour garantir votre satisfaction.</p>

        <p><strong>2. Transparence et Fiabilité :</strong> Nous croyons en la transparence totale. Les informations sur chaque logement, y compris les photos, les équipements et les services disponibles, sont précises et à jour. Vous pouvez faire confiance à la fiabilité des informations fournies sur notre plateforme.</p>

        <p><strong>3. Confidentialité et Sécurité des Données :</strong> Nous accordons une grande importance à la confidentialité et à la sécurité de vos données personnelles. Toutes les informations que vous partagez avec nous sont traitées de manière confidentielle. Nous utilisons des mesures de sécurité avancées pour protéger vos données contre tout accès non autorisé ou toute utilisation abusive.</p>

        <p><strong>4. Responsabilités de l'Utilisateur :</strong> En vous inscrivant sur notre plateforme, vous acceptez de fournir des informations précises, complètes et à jour. Vous êtes responsable de la confidentialité de votre compte et de vos identifiants de connexion. Vous vous engagez à ne pas partager votre compte avec d'autres personnes et à respecter nos règles d'utilisation. Tout contenu offensant, diffamatoire ou illégal ne sera pas toléré.</p>

        <p><strong>5. Support Client Réactif :</strong> Notre équipe de support client est disponible pour répondre à toutes vos questions et préoccupations. Nous nous efforçons de résoudre rapidement tous les problèmes que vous pourriez rencontrer lors de votre utilisation de notre plateforme.</p>

        <p><strong>6. Modifications des Conditions Générales :</strong> Nos conditions générales d'utilisation peuvent être sujettes à des modifications périodiques. Nous nous réservons le droit de mettre à jour ou de modifier ces conditions à tout moment, sans préavis. Il est de votre responsabilité de vérifier régulièrement ces conditions pour rester informé des éventuelles modifications. En continuant à utiliser notre service après toute modification apportée à ces conditions, vous acceptez les nouvelles conditions générales.</p>
      </div>
    </div>
`;
  }

  getFonctionnement(){
    return `
          <div class="container">
          <h3><strong>Inscription</strong></h3>
          <p>Pour commencer à utiliser notre site et profiter de ses fonctionnalités, vous devez d'abord vous inscrire. Voici comment cela fonctionne :</p>
          <ol>
              <li>Cliquez sur le bouton "S'inscrire" en haut de la page.</li>
              <li>Renseignez vos informations personnelles, telles que votre nom, votre adresse e-mail et un mot de passe sécurisé.</li>
              <li>Validez votre inscription en cliquant sur "S'inscrire".</li>
              <li>Vous recevrez un e-mail de confirmation pour activer votre compte.</li>
              <li>Connectez-vous avec votre nom d'utilisateur et votre mot de passe pour accéder à votre compte.</li>
          </ol>

          <h3><strong>Publication de Logements</strong></h3>
          <p>Une fois que vous êtes connecté à votre compte, vous pouvez publier des logements disponibles à la location. Voici comment procéder :</p>
          <ol>
              <li>Accédez à votre tableau de bord.</li>
              <li>Cliquez sur "Publier un logement".</li>
              <li>Renseignez les détails de votre logement, tels que son emplacement, sa description, ses photos et son tarif.</li>
              <li>Validez la publication de votre logement.</li>
              <li>Votre logement sera désormais visible pour les utilisateurs qui souhaitent le réserver.</li>
          </ol>

          <h3><strong>Réservation de Logements</strong></h3>
          <p>Les utilisateurs de notre site peuvent réserver des logements qui les intéressent. Voici comment cela fonctionne :</p>
          <ol>
              <li>Parcourez les logements disponibles sur notre site.</li>
              <li>Cliquez sur un logement pour voir plus de détails.</li>
              <li>Si le logement vous convient, sélectionnez les dates de séjour souhaitées et cliquez sur "Réserver".</li>
              <li>Vous serez redirigé vers un formulaire de réservation où vous pourrez confirmer les détails de votre séjour.</li>
              <li>Une fois la réservation confirmée, le propriétaire du logement sera notifié et pourra accepter ou décliner la réservation.</li>
              <li>Une fois la réservation acceptée, vous recevrez une confirmation par e-mail avec les informations de contact du propriétaire.</li>
          </ol>
      </div>
    `
  }

  getConfidentialite(){
    return `
      <div>
          <p><strong>Confidentialité et Sécurité des Données :</strong> Nous accordons une grande importance à la confidentialité et à la sécurité de vos données personnelles. Toutes les informations que vous partagez avec nous lors de votre inscription seront traitées de manière confidentielle. Nous utilisons des mesures de sécurité avancées pour protéger vos données contre tout accès non autorisé ou toute utilisation abusive. Vos informations ne seront en aucun cas vendues, échangées ou partagées avec des tiers sans votre consentement explicite.</p>
          <p><strong>Responsabilités de l'Utilisateur :</strong> En vous inscrivant sur notre plateforme, vous acceptez de fournir des informations précises, complètes et à jour. Vous êtes responsable de la confidentialité de votre compte et de vos identifiants de connexion. Vous vous engagez à ne pas partager votre compte avec d'autres personnes. Vous acceptez également de respecter nos règles d'utilisation et de ne pas publier de contenu offensant, diffamatoire ou illégal sur notre plateforme.</p>
          <p><strong>Modifications des Conditions Générales :</strong> Nos conditions générales d'inscription peuvent être sujettes à des modifications périodiques. Nous nous réservons le droit de mettre à jour ou de modifier ces conditions à tout moment, sans préavis. Il est de votre responsabilité de vérifier régulièrement ces conditions pour rester informé des éventuelles modifications. En continuant à utiliser notre service après toute modification apportée à ces conditions, vous acceptez les nouvelles conditions générales.</p>
      </div>
    `
  }


}
