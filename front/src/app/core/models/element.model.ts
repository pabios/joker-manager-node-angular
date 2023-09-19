
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


  images!: Images[]
}

export class Images {
  id!: any
  url!: string
  alt!:string
  elementId!:any
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
