const mongoose = require('mongoose');
const UserSchema = require('../model/models');

const dbName = 'south_park'
const MONGO_DB_URI = `mongodb+srv://admin:7E0tKolBSj6eekY8@cluster0-aihri.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(MONGO_DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
// 1 variant
const db = mongoose.connection;
db.on("error", err => console.error("error: ", err));
db.once("open", () => console.log("we are connected!"))

// 2 variant
/*.then(() => {
    console.log('Mongo db connected successfully')
    // LISTEN APP
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
})
.catch((e) => {
    console.log('Mongo db connection error' + e)
})*/


const collectionName = 'heroes'
const User = mongoose.model(`${collectionName}`, UserSchema);
module.exports = User


