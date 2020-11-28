import {ITodo} from '../types/todo'
import {model, Schema} from 'mongoose'

const todoSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  text: {
    type: String
  },
  status: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: String,
    required: true
  }
}, {timestamps: true})


export default model<ITodo>('Todo', todoSchema)