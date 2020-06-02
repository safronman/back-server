const express = require('express')
const users = require('./routers/users-router')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
const SomeString = require('./model');


// MONGOOSE
// remote mongo db
const dbName = 'south_park'
const MONGO_DB_URI = `mongodb+srv://admin:7E0tKolBSj6eekY8@cluster0-aihri.mongodb.net/${dbName}?retryWrites=true&w=majority`
mongoose.connect(MONGO_DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
// 1 variant
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log(`we\'re connected!`)
});
// 2 variant
/*.then(() => {
    console.log('Mongo db connected successfully')
    // LISTEN APP
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
})
.catch((e) => {
    console.log('Mongo db connection error' + e)
})*/


const app = express()
const port = process.env.PORT || 7542

// CORS
app.use(cors())


//BODY-PARSER
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())


// LOG MIDDLEWARE
app.use((req, res, next) => {
    debugger
    console.log('Time: ', new Date().toString());
    console.log(req.method, req.url, 'params:', req.params);
    console.log('query:', req.query);
    console.log('body:', req.body);
    // console.log('cookies:', req.cookies);
    // console.log('headers:', req.headers);
    // console.log('rawHeaders:', req.rawHeaders);
    next();
});

const fakeCounter = {
    counter: 0
}

// ROUTER
// define base url. Details in users-router.js
app.use('/users', users)

app.get('/tasks', (req, res) => res.send('tasks'))
app.get('/yo', async (req, res) => {
    fakeCounter.counter += 1
    try {
        let result = await SomeString.create({
            str: fakeCounter.counter
        })
        res.status(200).json({count: fakeCounter.counter, result})
    } catch (e) {
        console.log('error: ', e)
        res.send(200)
    }
})

app.use((req, res) => {
    res.send(404)
})


// LISTEN APP
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

