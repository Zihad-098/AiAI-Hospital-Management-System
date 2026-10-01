const MedicationSchedule = require("../models/MedicationSchedule");




// Add Medication

const addMedication = async(req,res)=>{


    try{


        console.log(

            "Medication Data:",

            req.body

        );



        const medication = await MedicationSchedule.create(

            req.body

        );



        res.status(201).json({

            message:"Medication schedule added successfully",

            medication

        });



    }


    catch(error){


        console.log(

            "Medication Error:",

            error

        );



        res.status(500).json({

            message:error.message

        });


    }


};









// Get Medication

const getMedications = async(req,res)=>{


    try{


        const medications = await MedicationSchedule.find();



        res.json(

            medications

        );



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// Delete Medication

const deleteMedication = async(req,res)=>{


    try{


        await MedicationSchedule.findByIdAndDelete(

            req.params.id

        );



        res.json({

            message:"Medication deleted successfully"

        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









module.exports = {


    addMedication,

    getMedications,

    deleteMedication


};