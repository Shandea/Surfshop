const mongoose = require('mongoose'); // the software we need to actually define the objects strucutre for MongoDB/

const UserSchema = new mongoose.Schema({ // define the strucutre, and validation requirements of this type of object

    name: {
        type: String,
        required: [true, "email is required!"],
        minLength: [3, "Min email length is 3 chars."],
        maxLength: [100, "Max email length is 100 chars."],

    },
    username: {
        type: String,
        required: [true, "username is required!"],
        minLength: [3, "Min username length is 3 characters."],
        maxLength: [100, "Max username length is 100 characters"]
    },
    password: {
        type: String,
        required: [true, "password is required!"],
        minLength: [8, "Min password length is 8 characters."],
        maxLength: [100, "Max password length is 100 characters"]

    }
})


//convert the schema into an actual model - inits the database to recieve that data.
const User = mongoose.model("User", UserSchema)

module.exports = User;