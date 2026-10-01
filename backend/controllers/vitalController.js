const VitalSigns = require("../models/VitalSigns");




// Add Vital Signs

const addVital = async(req,res)=>{


    try{


        const vital = await VitalSigns.create(

            req.body

        );


        res.status(201).json({

            message:"Vital signs added successfully",

            vital

        });


    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// Get All Vital Signs

const getVitals = async(req,res)=>{


    try{


        const vitals = await VitalSigns.find()

        .populate("patient");



        res.json(vitals);



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// Delete Vital Signs

const deleteVital = async(req,res)=>{


    try{


        await VitalSigns.findByIdAndDelete(

            req.params.id

        );


        res.json({

            message:"Vital deleted successfully"

        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};








module.exports = {


    addVital,

    getVitals,

    deleteVital


};