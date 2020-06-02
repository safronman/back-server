const express = require('express')

const tasksRouter = express.Router()

tasksRouter.get('/', (req, res) => {
    res.send(`<h1>Tasks</h1>`)
})

module.exports = tasksRouter;


