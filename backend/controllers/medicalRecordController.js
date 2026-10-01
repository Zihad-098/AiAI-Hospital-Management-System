const MedicalRecord = require("../models/MedicalRecord");







// Add Medical Record

const addMedicalRecord = async(req,res)=>{


    try{


        const record = await MedicalRecord.create(

            req.body

        );



        const populatedRecord = await MedicalRecord.findById(

            record._id

        )

        .populate("patient")

        .populate("doctor");



        res.status(201).json({


            message:"Medical record created successfully",


            record: populatedRecord


        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// Get All Medical Records

const getMedicalRecords = async(req,res)=>{


    try{


        const records = await MedicalRecord.find()

        .populate("patient")

        .populate("doctor");



        res.json(

            records

        );



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// Delete Medical Record

const deleteMedicalRecord = async(req,res)=>{


    try{


        await MedicalRecord.findByIdAndDelete(

            req.params.id

        );



        res.json({

            message:"Medical record deleted successfully"

        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// Update Medical Record

const updateMedicalRecord = async(req,res)=>{


    try{


        const record = await MedicalRecord.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new:true

            }

        )

        .populate("patient")

        .populate("doctor");



        res.json({


            message:"Medical record updated successfully",


            record


        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









module.exports = {


    addMedicalRecord,

    getMedicalRecords,

    deleteMedicalRecord,

    updateMedicalRecord


};