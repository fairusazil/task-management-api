const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    role: {
        type: String,
        default: 'employee'
    },
});

const User = mongoose.model('users', userSchema);

module.exports = User