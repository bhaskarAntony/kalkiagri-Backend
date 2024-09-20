const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    }, 
    contact:{
        type:String,
        required:true
    },
    agree:{
        type:Boolean,
        required:true
    }
})

const kalkibuyerFolder = mongoose.model('kalkibuyerFolder', buyerSchema);
module.exports = kalkibuyerFolder;