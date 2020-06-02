const {Task} = require('../model/db')

const getTasks = () => {
    return Task.find()
}

exports.getTasks = getTasks
