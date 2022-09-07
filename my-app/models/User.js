const {Schema, model} = require("mongoose");
const bcrypt = require('bcrypt')

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

UserSchema.pre('save', async function () {
    this.password = await bcrypt.has(this._doc.password, 10)
})

const User = model("User", UserSchema)
module.exports = User;