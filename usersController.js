/*
const {getUsers, addUser} = require('./repository');

const usersController = async (req, res) => {
    if (req.method === 'POST') {
        let randomName = Math.random().toString(36).substring(7).toUpperCase();
        const result = addUser(randomName)
        res.write(JSON.stringify({success: true}))
        res.end()
    } else {
        const users = await getUsers()
        res.write(JSON.stringify(users))
        res.end()
    }
}

exports.usersController = usersController
*/
