const express = require('express')
const router = express.Router()
const { getAllTasks, getATask, createTasks, updateTask, deleteTask } = require('../controllers/task')

router.get('/', getAllTasks)
router.post('/', createTasks)
router.get('/:id', getATask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router
