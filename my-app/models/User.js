const {Schema, model} = require("mongoose");

const UserSchema = new Schema ({
    user_name: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
        type: String,
        require: true,
        
    },
})

const User = model("User", UserSchema)
module.exports = User;