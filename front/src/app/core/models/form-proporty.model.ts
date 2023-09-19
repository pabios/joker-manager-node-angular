export enum PropertyType {
  Chambre = 'Chambre',
  Maison = 'Maison',
  Appartement = 'Appartement',
  Hotel = 'Hotel'
}

export interface Property {
  id: number;
  title: string;
  description: string;
  type: PropertyType;
  price: number;
  image: string;
  location: string;
}
