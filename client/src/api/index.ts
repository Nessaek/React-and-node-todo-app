import * as React from "react"
import {ITodo} from "../types/type.todo"
import {addTodo} from "./requests"

const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any): string | any => {
  console.log(e)
  e.preventDefault()
  addTodo(formData)
  .then(data => data
  )
  .catch((err) => console.log(err))
}


export {
  handleSaveTodo
}