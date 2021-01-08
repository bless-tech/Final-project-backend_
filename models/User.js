const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,   
        required:true,
        lowercase:true,
        unique:true   
    },
    passwordHash:{
        type:String,      
        minlength:8
    }
})


module.exports= mongoose.model("User",userSchema);