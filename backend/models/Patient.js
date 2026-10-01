const mongoose = require("mongoose");



const patientSchema = new mongoose.Schema({



    name:{


        type:String,

        required:true


    },





    email:{


        type:String,

        required:true,

        unique:true


    },





    phone:{


        type:String


    },





    age:{


        type:Number


    },





    gender:{


        type:String


    },





    address:{


        type:String


    },





    disease:{


        type:String


    },





    // Assigned Nurse

    assignedNurse:{


        type:String


    }



});







module.exports = mongoose.model(

    "Patient",

    patientSchema

);