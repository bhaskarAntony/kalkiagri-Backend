const kalkibuyerFolder = require("../models/buyer");




exports.createbuyer = async(req, res)=>{
    const data = req.body;

    try {
        const newbuyer = new kalkibuyerFolder(data);
        await newbuyer.save();
        res.status(200).json({
            message:'Created buyer account..',
            createduser:newbuyer
        })
    } catch (error) {
        res.status(500).json({
            message:error,
           
        })
    }
}


exports.getbuyers = async(req, res) =>{
    try {
        const allbuyers = await kalkibuyerFolder.find(); //this method can gets all data from the database
        res.status(200).json({
            data:allbuyers,
            message:"success"
        })
    } catch (error) {
        res.status(500).json({
            data:error,
            message:"something went wrong please try again..."

        })
    }
}