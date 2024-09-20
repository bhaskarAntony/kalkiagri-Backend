const registrationFolder = require("../models/registartion");





exports.createUser = async(req, res)=>{
    const data = req.body;

    try {
        const newuser = new registrationFolder(data);
        await newuser.save();
        res.status(200).json({
            message:'user registered..',
            createduser:newuser
        })
    } catch (error) {
        res.status(500).json({
            message:error,
           
        })
    }
}


exports.getUsers = async(req, res) =>{
    try {
        const allusers = await registrationFolder.find(); //this method can gets all data from the database
        res.status(200).json({
            data:allusers,
            message:"success"
        })
    } catch (error) {
        res.status(500).json({
            data:error,
            message:"something went wrong please try again..."

        })
    }
}