export type Root = Root2[]

export interface Root2 {
  _id: Id
  name: string
  ubication: string
  menu: Menu[]
  poster: Poster[]
  __v: number
}

export interface Id {
  $oid: string
}

export interface Menu {
  name: string
  price: number
  namePhoto: string
  url: string
}

export interface Poster {
  namePhoto: string
  url: string
}
