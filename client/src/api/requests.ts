import axios, {AxiosResponse} from 'axios'
import {ITodo} from "../types/type.todo"

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

const addTodo = async (
    formData: ITodo
): Promise<AxiosResponse<string>> => {
  try {
    const todo: Omit<ITodo, '_id'> = {
      text: formData.text,
      status: false,
      createdAt: formData.createdAt
    }

    const saveTodo: AxiosResponse<string> = await axios.post(
        api + '/add-todo',
        todo
    )
    return saveTodo
  } catch (error) {
    throw new Error(error)
  }
}



export default {
  addTodo
}