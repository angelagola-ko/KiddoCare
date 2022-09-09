const {Schema, model} = require("mongoose");

const childrenSchema = new Schema ({
    Name: {
        type: String,
        required: true,
    },
    Age: {
        type: Number,
        required: true,
    },
    Allergies: {
        type: String,
        required: false,
    },
    Notes: {
        type: String, 
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        timestamps: true
    }
})

const Children = mongoose.model ('Children', childrenSchema);
module.exports = Children;