const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters"],
    },
},
    {
        timestamp: true
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;