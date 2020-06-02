const express = require('express')
const {getTasks} = require('../repository/tasks-repository')

const tasksRouter = express.Router()

tasksRouter.get('/', async (req, res) => {
    try {
        const result = await getTasks()
        res.send(result)
    } catch (e) {
        console.error(e);
        res.sendStatus(400)
    }
})

module.exports = tasksRouter;


