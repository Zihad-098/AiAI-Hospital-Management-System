const NursingReport = require("../models/NursingReport");




// Add Report

const addReport = async(req,res)=>{


    try{


        const report = await NursingReport.create(

            req.body

        );


        res.status(201).json({

            message:"Nursing report added successfully",

            report

        });


    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// Get Reports

const getReports = async(req,res)=>{


    try{


        const reports = await NursingReport.find();


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









// Delete Report

const deleteReport = async(req,res)=>{


    try{


        await NursingReport.findByIdAndDelete(

            req.params.id

        );


        res.json({

            message:"Report deleted successfully"

        });


    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};








module.exports = {


    addReport,

    getReports,

    deleteReport


};