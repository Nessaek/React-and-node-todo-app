import {ITodo} from "../types/todo"
import {Request, Response} from 'express'
import Todo from '../model/todo'

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find()
    res.status(200).json({todos})
  } catch (error) {
    throw error
  }
}

const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ITodo, 'name' | 'text' | 'status' | 'createdAt'>

    const todo: ITodo = new Todo({
      name: body.name,
      text: body.text,
      status: body.status,
      createdAt: body.createdAt
    })

    const newTodo: ITodo = await todo.save()
    res.status(201).json(newTodo)
  } catch (error) {
    throw error
  }
}

const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: {id},
      body,
    } = req
    console.log(req)
    const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
        id,
        body,
        {
          new: true
        }
    )
    console.log(updateTodo)
    res.status(200).json(updateTodo)
  } catch (error) {
    throw error
  }
}

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(
        req.params.id
    )
    res.status(200).json(
        {...deletedTodo}
    )
  } catch (error) {
    throw error
  }
}

export {getTodos, addTodo, updateTodo, deleteTodo}