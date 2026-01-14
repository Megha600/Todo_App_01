import express from 'express'
import { addTodo, getAllTodo, editTodo, deleteTodo, toggleCompleteTodo } from '../../controllers/todo/todo.controllers.js'
import { addSubTodo, getAllSubTodos, editSubTodo, deleteSubTodo, toggleCompleteSubTodo } from '../../controllers/todo/subTodo.controllers.js'

const router = express.Router()

router.post('/todo', addTodo)
router.post('/subtodo', addSubTodo)
router.get('/get-todo', getAllTodo)
router.get('/get-subtodo', getAllSubTodos)
router.put('/todo/:id', editTodo)
router.put('/subtodo/:id', editSubTodo)
router.delete('/todo/:id', deleteTodo)
router.delete('/subtodo/:id', deleteSubTodo)
router.patch("/todo/:id/toggletodo", toggleCompleteTodo);
router.patch("/todo/:id/togglesubtodo", toggleCompleteSubTodo);


export default router;