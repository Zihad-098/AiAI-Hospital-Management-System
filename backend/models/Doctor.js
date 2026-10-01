const mongoose = require("mongoose");


const doctorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: String
    },

    specialization: {
        type: String
    },

    experience: {
        type: Number
    },

    department: {
        type: String
    }

});


module.exports = mongoose.model(
    "Doctor",
    doctorSchema
);