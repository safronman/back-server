const mongoose = require('mongoose');

// создаем схему
const userSchema = new mongoose.Schema({
    name: String
});

// создаем модуль (класс), на основе которого будем создавать однотипные объекты
const collectionName = 'users'
const User = mongoose.model(`${collectionName}`, userSchema);

const getUsers = (search) => {
    // SEARCH
    if (!search) {
        return User.find()
    } else {
        return User.find({name: new RegExp(search)})
    }
}

const getUser = (userId) => {
    return User.find({_id: userId})
}

const addUser = async (name) => {
    const user1 = new User({name})
    return user1.save()
}

const deleteUser = async (userId) => {
    return User.deleteOne({_id: userId})
}

const updateUser = async (userId, name) => {
    return User.updateOne({_id: userId}, {name:name})
}

exports.getUser = getUser
exports.updateUser = updateUser
exports.getUsers = getUsers
exports.addUser = addUser
exports.deleteUser = deleteUser
