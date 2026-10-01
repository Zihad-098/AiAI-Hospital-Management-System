const mongoose = require("mongoose");


const billingSchema = new mongoose.Schema({

    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },


    consultationCharge: {
        type: Number,
        default: 0
    },


    laboratoryCharge: {
        type: Number,
        default: 0
    },


    medicineCharge: {
        type: Number,
        default: 0
    },


    roomCharge: {
        type: Number,
        default: 0
    },


    totalAmount: {
        type: Number,
        default: 0
    },


    paymentStatus: {
        type: String,
        enum:[
            "Pending",
            "Paid"
        ],
        default:"Pending"
    },


    date:{
        type:Date,
        default:Date.now
    }


});


module.exports = mongoose.model(
    "Billing",
    billingSchema
);