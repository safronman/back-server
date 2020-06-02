const express = require('express')
const {addUser, getUsers, getUser, deleteUser, updateUser} = require('../repository')

const router = express.Router()

// обработка query параметров
router.get('/', async (req, res) => {
    const search = req.query.search
    let users = await getUsers(search)
    res.send(users)

    // Если нужно указать статус отличный от 200, то обращаемся к методу status и потом вызываем json,
    // куда передаем то что хотим отправить на front
    // res.status(201).json({users})
})

// параметры строки. Example: users/1
router.get('/:id', async (req, res) => {
    const userId = req.params.id;
    const user = await getUser(userId)
    if (user) {
        res.send(user)
    } else {
        res.send(404)
    }
})


router.delete('/:id', async (req, res) => {
    const userId = req.params.id;
    await deleteUser(userId)
    res.send(204)
})

// get body from post request
router.post('/', async (req, res) => {
    const name = req.body.name
    await addUser(name)
    res.send({success: true})
})

router.put('/', async (req, res) => {
    const name = req.body.name
    const id = req.body.id
    await updateUser(id, name)
    res.send({success: true})
})

module.exports = router;


