const mongoose = require("mongoose");


const appointmentSchema = new mongoose.Schema({


    patient: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "Patient",

        required: true

    },



    doctor: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "Doctor",

        required: true

    },



    appointmentDate: {

        type: Date,

        required: true

    },



    problem: {

        type: String,

        required: true

    },



    status: {

        type: String,

        enum: [

            "Pending",

            "Confirmed",

            "Completed",

            "Cancelled"

        ],

        default: "Pending"

    }


});



module.exports = mongoose.model(

    "Appointment",

    appointmentSchema

);