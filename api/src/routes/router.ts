import {Router} from 'express'
import {addTodo, deleteTodo, getTodos, updateTodo} from '../controller/todo.controller'

const router: Router = Router()

router.get('/todos', getTodos)

router.post('/add', addTodo)

router.put('/edit/:id', updateTodo)

router.delete('/delete/:id', deleteTodo)

export default router