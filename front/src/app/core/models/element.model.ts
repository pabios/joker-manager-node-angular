
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
