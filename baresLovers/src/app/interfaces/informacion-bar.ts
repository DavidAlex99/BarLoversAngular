export type Root = Root2[]

export interface Root2 {
  _id: Id
  name: string
  ubication: string
  menu: Menu[]
  poster: Poster[]
  evento: Evento[]
  post: Post[]
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

export interface Evento {
  nameEvent: string
  url: string
  description: string
  images: Images[]
}

export interface Post {
  namePost: string
  url: string
  description: string
  images: Images[]
}

export interface Images{
  url: string
}