export interface Cake {
  name: string,
  reviews?: Review[],
  image: string,
  _id?: string
}

export interface Review {
  comment: string,
  rating: number,
  cake?: string
}
