const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
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
    isFpo:{
        type:String,
        required:true
    },
    fpoName:{
        type:String,
    },
    ceoName:{
        type:String,
    },
    fpoRegNo:{
        type:String,
    },
    fpoType:{
        type:String,
    },
    agree:{
        type:Boolean,
        required:true
    }
})

const KalkiSellersFolder = mongoose.model('KalkiSellersFolder', sellerSchema);
module.exports = KalkiSellersFolder;