const KalkiSellersFolder = require("../models/seller");






exports.createSeller = async(req, res)=>{
    const data = req.body;

    try {
        const newSeller = new KalkiSellersFolder(data);
        await newSeller.save();
        res.status(200).json({
            message:'Created seller account..',
            createduser:newSeller
        })
    } catch (error) {
        res.status(500).json({
            message:error,
           
        })
    }
}


exports.getSellers = async(req, res) =>{
    try {
        const allsellers = await KalkiSellersFolder.find(); //this method can gets all data from the database
        res.status(200).json({
            data:allsellers,
            message:"success"
        })
    } catch (error) {
        res.status(500).json({
            data:error,
            message:"something went wrong please try again..."

        })
    }
}