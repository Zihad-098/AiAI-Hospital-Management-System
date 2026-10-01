const mongoose = require("mongoose");


const laboratorySchema = new mongoose.Schema({


    patient: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "Patient",

        required:true

    },



    doctor: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "Doctor",

        required:true

    },



    testName: {

        type:String,

        required:true

    },



    result: {

        type:String

    },



    reportDate: {

        type:Date,

        default:Date.now

    },



    status: {

        type:String,

        enum:[

            "Pending",

            "Completed"

        ],

        default:"Pending"

    }



});



module.exports = mongoose.model(

    "Laboratory",

    laboratorySchema

);