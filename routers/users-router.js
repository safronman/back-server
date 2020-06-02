const express = require('express')
const {addUser, getUsers, getUser, deleteUser, updateUser} = require('../repository/users-repository')

const usersRouter = express.Router()

// обработка query параметров
usersRouter.get('/', async (req, res) => {
    const search = req.query.search
    try {
        let users = await getUsers(search)
        res.send(users)
    } catch (e) {
        console.error(e);
        res.sendStatus(400)
    }

    // Если нужно указать статус отличный от 200, то обращаемся к методу status и потом вызываем json,
    // куда передаем то что хотим отправить на front
    // res.status(201).json({users})
})

// параметры строки. Example: users/1
usersRouter.get('/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await getUser(userId)
        if (user) {
            res.send(user)
        } else {
            res.sendStatus(404)
        }
    } catch (e) {
        console.error(e);
        res.sendStatus(400)
    }
})


usersRouter.delete('/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        await deleteUser(userId)
        res.sendStatus(204)
    } catch (e) {
        console.error(e);
        res.sendStatus(400)
    }
})

// get body from post request
usersRouter.post('/', async (req, res) => {
    const name = req.body.name
    try {
        await addUser(name)
        res.send({success: true})
    } catch (e) {
        console.error(e);
        res.sendStatus(400)
    }
})

usersRouter.put('/', async (req, res) => {
    const name = req.body.name
    const id = req.body.id
    try {
        await updateUser(id, name)
        res.send({success: true})
    } catch (e) {
        console.error(e);
        res.sendStatus(400)
    }
})

module.exports = usersRouter


