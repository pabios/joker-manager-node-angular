
export interface StateModel {
  id: number
  user_id: number
  categorie_id: number
  name: string
  content: string

  locate: string
  exactLocate:string
  city:string,

  size: number
  price: number
  description: string
  createdDate: string,
  beginDate:string,
  endDate:string,

  images: any[]
}
