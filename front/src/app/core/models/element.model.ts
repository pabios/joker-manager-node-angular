
export type Element = Root

export class Root {
  id!: string
  type!: string
  description!: string
  price!: string
  createdDate!: string
  location!: string
  verified!: string
  stars!: string
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
