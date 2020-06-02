const mongoose = require("mongoose");


const SomeStringSchema = new mongoose.Schema(
    {
        str: {
            type: String,
            required: true
        },
    },
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'updated',
        },
    }
);
module.exports = mongoose.model('someString', SomeStringSchema)
