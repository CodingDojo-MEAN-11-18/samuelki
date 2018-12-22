import { ArrayType } from '../../../node_modules/@angular/compiler';

export interface Author {
  name: string
  _id?: string
  quotes?: Array<Quote>
}

export interface Quote {
  quote: string
  votes?: number
  _id?: string
}
