const mongoose = require("mongoose");


const roomSchema = new mongoose.Schema({

    roomNumber: {
        type:String,
        required:true,
        unique:true
    },


    type: {
        type:String,
        enum:[
            "General Ward",
            "Single Cabin",
            "VIP Cabin",
            "ICU"
        ],
        required:true
    },


    status: {
        type:String,
        enum:[
            "Available",
            "Occupied"
        ],
        default:"Available"
    },


    patient: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patient"
    }


});


module.exports = mongoose.model(
    "Room",
    roomSchema
);