const express = require('express')
const {addUser, getUsers, getUser, deleteUser, updateUser} = require('../repository/usersRepository')

const usersRouter = express.Router()

// обработка query параметров
usersRouter.get('/', async (req, res) => {
    debugger
    const search = req.query.search
    let users = await getUsers(search)
    res.send(users)

    // Если нужно указать статус отличный от 200, то обращаемся к методу status и потом вызываем json,
    // куда передаем то что хотим отправить на front
    // res.status(201).json({users})
})

// параметры строки. Example: users/1
usersRouter.get('/:id', async (req, res) => {
    const userId = req.params.id;
    const user = await getUser(userId)
    if (user) {
        res.send(user)
    } else {
        res.send(404)
    }
})


usersRouter.delete('/:id', async (req, res) => {
    const userId = req.params.id;
    await deleteUser(userId)
    res.send(204)
})

// get body from post request
usersRouter.post('/', async (req, res) => {
    const name = req.body.name
    await addUser(name)
    res.send({success: true})
})

usersRouter.put('/', async (req, res) => {
    const name = req.body.name
    const id = req.body.id
    await updateUser(id, name)
    res.send({success: true})
})

module.exports = usersRouter


