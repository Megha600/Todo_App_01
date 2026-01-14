import express from 'express'
import { addTodo } from '../../controllers/todo/todo.controllers.js'
import { addSubTodo } from '../../controllers/todo/subTodo.controllers.js'

const router = express.Router()

router.post('/todo', addTodo)
router.post('/subtodo', addSubTodo)

export default router;