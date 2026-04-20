const mongoose = require('mongoose')

const BlogSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    desc:{
        type:String,
    },
    image:{
        type:String,
    },
    comments: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
},{
    timestamps:true
})

module.exports = mongoose.model('Blog', BlogSchema);