const Laboratory = require("../models/Laboratory");




// Add Laboratory Report

const addLaboratory = async(req,res)=>{


    try{


        const report = await Laboratory.create(

            req.body

        );


        res.status(201).json({

            message:"Laboratory report added successfully",

            report

        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// Get All Laboratory Reports

const getLaboratories = async(req,res)=>{


    try{


        const reports = await Laboratory.find()

        .populate("patient")

        .populate("doctor");



        res.json(

            reports

        );



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// Update Laboratory Report

const updateLaboratory = async(req,res)=>{


    try{


        const report = await Laboratory.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new:true

            }

        );



        res.json({

            message:"Laboratory report updated successfully",

            report

        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// Delete Laboratory Report

const deleteLaboratory = async(req,res)=>{


    try{


        await Laboratory.findByIdAndDelete(

            req.params.id

        );



        res.json({

            message:"Laboratory report deleted successfully"

        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









module.exports = {


    addLaboratory,

    getLaboratories,

    updateLaboratory,

    deleteLaboratory


};