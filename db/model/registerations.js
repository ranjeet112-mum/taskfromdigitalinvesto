const mongoose = require('mongoose');

const registeration = new mongoose.model('resgistrationforinternship',{
    
    name : {
        type:String,
        required : true,
    },
    email : {
        type: String,
        required : true,
    },
    phoneNo : {
        type : Number,
        unique:true,
        required:true,
    },
    password: {
        type :String,
        require:true,
    }
})

module.exports = registeration;