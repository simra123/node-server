const Tasks = require('../models/task')
const asyncWrapper = require('../middeware/asyncWrapper')
const { createCustomError } = require('../errors/customErrorHandler')

const getAllTasks = asyncWrapper(async (req, res, next) => {
    const tasks = await Tasks.find({})
    res.status(201).json({ tasks })
})

const getATask = asyncWrapper(async (req, res, next) => {
    const { id: searchId } = req.params
    const tasks = await Tasks.findOne({ _id: searchId })
    if (!tasks) {
        //res.status(404).json({ msg: `no tasks with the id ${ searchId }` })
        return next(createCustomError(`no task with id ${ searchId }`, 404))
    }
    res.status(201).json({ tasks })
})

const createTasks = asyncWrapper(async (req, res, next) => {
    const tasks = await Tasks.create(req.body)
    res.status(201).json({ tasks })

})

const updateTask = asyncWrapper(async (req, res, next) => {
    const { id: searchId } = req.params
    const tasks = await Tasks.findOneAndUpdate({ _id: searchId }, req.body, {
        new: true,
        runValidators: true
    })
    if (!tasks) {
        //res.status(404).json({ msg: `no tasks with the id ${ searchId }` })
        return next(createCustomError(`no task with id ${ searchId }`, 404))
    }
    res.status(201).json({ tasks })

})
const deleteTask = asyncWrapper(async (req, res, next) => {
    const { id: searchId } = req.params
    const tasks = await Tasks.findOneAndDelete({ _id: searchId })
    if (!tasks) {
        //res.status(404).json({ msg: `no tasks with the id ${ searchId }` })
        return next(createCustomError(`no task with id ${ searchId }`, 404))
    }
    res.status(201).json({ msg: [] })
})

module.exports = { getAllTasks, getATask, createTasks, updateTask, deleteTask }