const mongoose = require('mongoose');

// Схема в Mongoose определяет метаданные модели - ее свойства, типы данных и ряд другой информации.
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name: {type: String, required: false}
    },
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'updated',
        }
    }
);

const TaskSchema = new Schema(
    {
        title: {type: String, required: false},
        order: {type: Number, required: false}
    },
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'updated',
        }
    }
);

exports.UserSchema = UserSchema
exports.TaskSchema = TaskSchema

