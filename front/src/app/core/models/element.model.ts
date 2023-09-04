
export type Element = Root

export class Root {
  id!: string
  content!: string
  description!: string
  name!: string
  createdDate!: string
  locate!: string
  price!:number
  size!:number
  verified!: string
  stars!: string
  categorie_id!:number


  images!: Image[]
}

export class Image {
  id!: any
  src!: string
}

//
// export class Element {
//   id!: number;
//   title!: string;
//   description!: string;
//   imageUrl!: string;
//   createdDate!: Date;
//   snaps!: number;
//   location?: string;
//   fichier?:string;
// }
