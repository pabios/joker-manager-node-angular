import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SpecPagesService {

  private pages: { name: string, content: string }[] = [
    {
      name: "Articles",
      content: "Structure des Logements à Publier\n" +
        "\n" +
        "Lorsque vous publiez un logement sur notre site, il est essentiel de fournir des informations complètes et précises pour aider les voyageurs à prendre une décision éclairée. La structure typique d'une annonce de logement comprend les éléments suivants :\n" +
        "\n" +
        "Titre de l'Annonce : Un titre clair et attractif pour attirer l'attention des voyageurs.\n" +
        "Description : Une description détaillée du logement, y compris sa taille, ses caractéristiques, son emplacement et tout ce qui le rend unique.\n" +
        "Photos : Des images de haute qualité qui montrent toutes les parties du logement, y compris les chambres, la cuisine, la salle de bains et les espaces communs. Plus il y a de photos, mieux c'est.\n" +
        "Tarifs : Le prix par nuit ou par séjour, ainsi que les éventuels frais supplémentaires, tels que les frais de nettoyage ou de service.\n" +
        "Calendrier de Disponibilité : Un calendrier mis à jour indiquant les dates disponibles pour la réservation.\n" +
        "Équipements : Une liste des équipements et des services disponibles, comme le Wi-Fi, la climatisation, une cuisine entièrement équipée, etc.\n" +
        "Règles de la Maison : Les règles que les voyageurs doivent suivre pendant leur séjour, comme les heures de silence, les politiques de fumer, etc.\n" +
        "Contact du Propriétaire : Vos coordonnées ou un moyen de contact pour répondre aux questions des voyageurs et gérer les réservations.\n" +
        "Commentaires et Évaluations : Les avis et les évaluations des voyageurs précédents, s'ils sont disponibles."
    },
    {
      name: "Fonctionnement-du-site",
      content: "Comment fonctionne notre site\n" +
        "\n" +
        "Inscription\n" +
        "\n" +
        "Pour commencer à utiliser notre site et profiter de ses fonctionnalités, vous devez d'abord vous inscrire. Voici comment cela fonctionne :\n" +
        "\n" +
        "Cliquez sur le bouton \"S'inscrire\" en haut de la page.\n" +
        "Renseignez vos informations personnelles, telles que votre nom, votre adresse e-mail et un mot de passe sécurisé.\n" +
        "Validez votre inscription en cliquant sur \"S'inscrire\".\n" +
        "Vous recevrez un e-mail de confirmation pour activer votre compte.\n" +
        "Connectez-vous avec votre nom d'utilisateur et votre mot de passe pour accéder à votre compte.\n" +
        "Publication de logements\n" +
        "\n" +
        "Une fois que vous êtes connecté à votre compte, vous pouvez publier des logements disponibles à la location. Voici comment procéder :\n" +
        "\n" +
        "Accédez à votre tableau de bord.\n" +
        "Cliquez sur \"Publier un logement\".\n" +
        "Renseignez les détails de votre logement, tels que son emplacement, sa description, ses photos et son tarif.\n" +
        "Validez la publication de votre logement.\n" +
        "Votre logement sera désormais visible pour les utilisateurs qui souhaitent le réserver.\n" +
        "Réservation de logements\n" +
        "\n" +
        "Les utilisateurs de notre site peuvent réserver des logements qui les intéressent. Voici comment cela fonctionne :\n" +
        "\n" +
        "Parcourez les logements disponibles sur notre site.\n" +
        "Cliquez sur un logement pour voir plus de détails.\n" +
        "Si le logement vous convient, sélectionnez les dates de séjour souhaitées et cliquez sur \"Réserver\".\n" +
        "Vous serez redirigé vers un formulaire de réservation où vous pourrez confirmer les détails de votre séjour.\n" +
        "Une fois la réservation confirmée, le propriétaire du logement sera notifié et pourra accepter ou décliner la réservation.\n" +
        "Une fois la réservation acceptée, vous recevrez une confirmation par e-mail avec les informations de contact du propriétaire."
    },
    {
      name: "Donnees-et-confidentialite",
      content: "Contenu de la page Données et confidentialité..."
    },
    {
      name: "Charte-qualite",
      content: "Contenu de la page Charte qualité..."
    }
  ];
  constructor() {
  }
  getPages() {
    return this.pages;
  }

  getPageByName(name: string) {
    return this.pages.find(page => page.name === name);
  }

}
