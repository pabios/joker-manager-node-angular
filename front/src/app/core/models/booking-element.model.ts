export type BookingElement = Root2

export interface Root2 {
  id: number
  nbPeople: number
  beginDate: string
  endDate: string
  createdDate: string
  price: number
  priceTotal: number
  userId: number
  elementId: number
  element: Element[]
}

export interface Element {
  id: number
  user_id: number
  categorie_id: number
  name: string
  content: string
  description: string
  locate: string
  price: number
  size: number
  createdDate: string
  elementType_id: number
  verified: number
  exactLocate: string
  desired: string
  city: string
}
