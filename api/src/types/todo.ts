import {Document} from 'mongoose'

export interface ITodo extends Document {
  name: string
  text: string
  status: boolean
  createdAt: string
}