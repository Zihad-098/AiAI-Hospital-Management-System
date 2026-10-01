const mongoose = require("mongoose");





// Prescription Sub Schema

const prescriptionSchema = new mongoose.Schema({



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



    duration:{


        type:String,

        required:true


    }



});









// Medical Record Schema

const medicalRecordSchema = new mongoose.Schema({





    // Patient ID

    patient:{


        type:mongoose.Schema.Types.ObjectId,


        ref:"Patient",


        required:true


    },









    // Doctor ID from User login

    doctor:{


        type:String,


        required:true


    },









    diagnosis:{


        type:String,


        required:true


    },









    prescriptions:[prescriptionSchema],









    testReport:{


        type:String


    },









    notes:{


        type:String


    },









    date:{


        type:Date,


        default:Date.now


    }





});









module.exports = mongoose.model(

    "MedicalRecord",

    medicalRecordSchema

);