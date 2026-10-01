const Patient = require("../models/Patient");




// Add Patient

const addPatient = async(req,res)=>{


    try{


        const patient = await Patient.create(

            req.body

        );


        res.status(201).json({

            message:"Patient added successfully",

            patient

        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// Get All Patients

const getPatients = async(req,res)=>{


    try{


        const patients = await Patient.find();



        res.json(

            patients

        );



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// Get Assigned Patients

const getAssignedPatients = async(req,res)=>{


    try{


        console.log(

            "Searching Nurse ID:",

            req.params.nurseId

        );



        const allPatients = await Patient.find();



        console.log(

            "All Patients:",

            allPatients

        );



        const patients = await Patient.find({

            assignedNurse:req.params.nurseId

        });



        console.log(

            "Matched Patients:",

            patients

        );



        res.json(

            patients

        );



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// Delete Patient

const deletePatient = async(req,res)=>{


    try{


        await Patient.findByIdAndDelete(

            req.params.id

        );


        res.json({

            message:"Patient deleted successfully"

        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// Update Patient

const updatePatient = async(req,res)=>{


    try{


        const patient = await Patient.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new:true

            }

        );



        res.json({

            message:"Patient updated successfully",

            patient

        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// Assign Nurse To Patient

const assignNurse = async(req,res)=>{


    try{


        console.log(

            "Saving Nurse ID:",

            req.body.nurseId

        );



        const patient = await Patient.findByIdAndUpdate(

            req.params.id,

            {

                assignedNurse:req.body.nurseId

            },

            {

                new:true

            }

        );



        console.log(

            "Updated Patient:",

            patient

        );



        res.json({

            message:"Nurse assigned successfully",

            patient

        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









module.exports = {


    addPatient,

    getPatients,

    getAssignedPatients,

    deletePatient,

    updatePatient,

    assignNurse


};