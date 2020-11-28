import axios, {AxiosError, AxiosResponse} from 'axios'
import {ITodo} from "../types/type.todo"

const api = 'http://localhost:4000'

const getTodos = async (): Promise<AxiosResponse<ITodo[]>> => {
  return await axios.get(
      api + '/todos'
  )

}


const addTodo = async (
    formData: ITodo | any
): Promise<ITodo> => {
  const todo: Omit<ITodo, '_id'> = {
    name: formData.name,
    text: formData.text,
    status: false,
    createdAt: formData.createdAt
  }
  return await axios.post(
      api + "/add", todo
  ).then((response =>
          response.data
  ), (error: AxiosError) => {
    console.log(error.message)
    // throw new Error(error)
  })

}

const updateTodo = async (
    formData: ITodo
): Promise<ITodo> => {
  const todo: Pick<ITodo, 'text' | 'updatedAt'> = {
    text: formData.text,
    updatedAt: formData.updatedAt
  }
  return await axios.put(
      api + "/edit/" + formData._id,
      todo
  ).then((response =>
          response.data
  ), (error: AxiosError) => {
    console.log(error.message)
    // throw new Error(error)
  })

}

const deleteTodoById = async (
    id: string
): Promise<string> => {

  return await axios.delete(
      api + "/delete/" + id
  ).then((response =>
          response.data._doc._id

  ), (error: AxiosError) => {
    console.log(error.message)
    // throw new Error(error)
  })

}


export {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodoById
}