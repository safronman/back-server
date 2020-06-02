const express = require('express')
const usersRouter = require('./routers/users-router')
const tasksRouter = require('./routers/tasks-router')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = process.env.PORT || 7542
const app = express()

// CORS
app.use(cors())

// BODY-PARSER
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// ROUTERS
app.use('/users', usersRouter)
app.use('/tasks', tasksRouter)
app.use((req, res) => {
    res.sendStatus(404)
})

// LOG MIDDLEWARE
/*app.use((req, res, next) => {
    debugger
    console.log('Time: ', new Date().toString());
    console.log(req.method, req.url, 'params:', req.params);
    console.log('query:', req.query);
    console.log('body:', req.body);
    // console.log('cookies:', req.cookies);
    // console.log('headers:', req.headers);
    // console.log('rawHeaders:', req.rawHeaders);
    next();
});*/

// LISTEN APP
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))

