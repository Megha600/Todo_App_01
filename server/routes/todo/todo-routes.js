import express from 'express'
import { addTodo, getAllTodo } from '../../controllers/todo/todo.controllers.js'
import { addSubTodo, getAllSubTodos } from '../../controllers/todo/subTodo.controllers.js'

const router = express.Router()

router.post('/todo', addTodo)
router.post('/subtodo', addSubTodo)
router.get('/get-todo', getAllTodo)
router.get('/get-subtodo', getAllSubTodos)

export default router;