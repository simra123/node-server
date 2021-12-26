const express = require('express')
const router = express.Router()
const {
    getAlltasks,
    createTasks,
    getAtask,
    updateTask,
    deleteTask
} = require('../controllers/task')

router.get('/', getAlltasks)
router.post('/', createTasks)
router.get('/:id', getAtask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router
