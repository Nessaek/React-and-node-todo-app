"use strict"
Object.defineProperty(exports, "__esModule", {value: true})
const express_1 = require("express")
const todo_controller_1 = require("../controller/todo.controller")
const router = express_1.Router()
router.get('/todos', todo_controller_1.getTodos)
router.post('/add', todo_controller_1.addTodo)
router.put('/edit/:id', todo_controller_1.updateTodo)
router.delete('/delete/:id', todo_controller_1.deleteTodo)
exports.default = router
