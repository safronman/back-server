const express = require('express')
const {getTasks} = require('../repository/tasks-repository')

const tasksRouter = express.Router()

tasksRouter.get('/', async (req, res) => {
    const result = await getTasks()
    res.send(result)
})

module.exports = tasksRouter;


