const mongoose = require("mongoose");


const nursingReportSchema = new mongoose.Schema({


    patient:{

        type:String,

        required:true

    },


    note:{

        type:String,

        required:true

    },


    status:{

        type:String,

        default:"Active"

    },


    date:{

        type:Date,

        default:Date.now

    }


});



module.exports = mongoose.model(

    "NursingReport",

    nursingReportSchema

);