const mongoose = require("mongoose");


const medicineSchema = new mongoose.Schema({

    name: {
        type:String,
        required:true
    },


    category: {
        type:String
    },


    price: {
        type:Number
    },


    quantity: {
        type:Number
    },


    expiryDate: {
        type:Date
    }


});


module.exports = mongoose.model(
    "Medicine",
    medicineSchema
);