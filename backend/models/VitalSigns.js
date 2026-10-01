const mongoose = require("mongoose");


const vitalSignsSchema = new mongoose.Schema({


    patient:{

        type:mongoose.Schema.Types.ObjectId,

        ref:"Patient",

        required:true

    },


    temperature:{

        type:String,

        required:true

    },


    bloodPressure:{

        type:String,

        required:true

    },


    heartRate:{

        type:String,

        required:true

    },


    oxygenLevel:{

        type:String

    },


    date:{

        type:Date,

        default:Date.now

    }


});



module.exports = mongoose.model(

    "VitalSigns",

    vitalSignsSchema

);