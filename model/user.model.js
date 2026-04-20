const mongoose = require('mongoose')

const UserSchema= new mongoose.Schema({
    FullName:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    profile:{
        type:String,
    },
    role:{
         type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
},{timestamps:true})

module.exports = mongoose.model('User', UserSchema);