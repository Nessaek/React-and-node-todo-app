"use strict"
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P,
    generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value)
    })
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value))
      } catch (e) {
        reject(e)
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value))
      } catch (e) {
        reject(e)
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled,
          rejected)
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next())
  })
}
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : {"default": mod}
}
Object.defineProperty(exports, "__esModule", {value: true})
exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getTodos = void 0
const todo_1 = __importDefault(require("../model/todo"))
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
  try {
    const todos = yield todo_1.default.find()
    res.status(200).json({todos})
  } catch (error) {
    throw error
  }
})
exports.getTodos = getTodos
const addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
  try {
    const body = req.body
    const todo = new todo_1.default({
      name: body.name,
      text: body.text,
      status: body.status,
      createdAt: body.createdAt
    })
    const newTodo = yield todo.save()
    res.status(201).json(newTodo)
  } catch (error) {
    throw error
  }
})
exports.addTodo = addTodo
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0,
    function* () {
      try {
        const {params: {id}, body,} = req
        console.log(req)
        const updateTodo = yield todo_1.default.findByIdAndUpdate(id, body, {
          new: true
        })
        console.log(updateTodo)
        res.status(200).json(updateTodo)
      } catch (error) {
        throw error
      }
    })
exports.updateTodo = updateTodo
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0,
    function* () {
      try {
        const deletedTodo = yield todo_1.default.findByIdAndRemove(
            req.params.id)
        res.status(200).json(Object.assign({}, deletedTodo))
      } catch (error) {
        throw error
      }
    })
exports.deleteTodo = deleteTodo
