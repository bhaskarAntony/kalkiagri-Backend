const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    userType:{
        type:String,
        required:true
    }
})

const registrationFolder = mongoose.model('kalkiusers', userSchema);
module.exports = registrationFolder;