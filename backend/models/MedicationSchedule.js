const mongoose = require("mongoose");



const medicationSchema = new mongoose.Schema({


    patient:{


        type:String,

        required:true


    },



    medicine:{


        type:String,

        required:true


    },



    dose:{


        type:String,

        required:true


    },



    time:{


        type:String,

        required:true


    },



    status:{


        type:String,

        default:"Pending"


    },



    date:{


        type:Date,

        default:Date.now


    }



});



module.exports = mongoose.model(

    "MedicationSchedule",

    medicationSchema

);