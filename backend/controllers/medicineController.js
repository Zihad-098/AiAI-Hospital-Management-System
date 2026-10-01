const Medicine = require("../models/Medicine");




// Add Medicine

const addMedicine = async(req,res)=>{


    try{


        const medicine = await Medicine.create(

            req.body

        );


        res.status(201).json({

            message:"Medicine added successfully",

            medicine

        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};








// Get All Medicines

const getMedicines = async(req,res)=>{


    try{


        const medicines = await Medicine.find();



        res.json(

            medicines

        );



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};








// Update Medicine

const updateMedicine = async(req,res)=>{


    try{


        const medicine = await Medicine.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new:true

            }

        );



        res.json({

            message:"Medicine updated successfully",

            medicine

        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};








// Delete Medicine

const deleteMedicine = async(req,res)=>{


    try{


        await Medicine.findByIdAndDelete(

            req.params.id

        );



        res.json({

            message:"Medicine deleted successfully"

        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};








module.exports = {


    addMedicine,

    getMedicines,

    updateMedicine,

    deleteMedicine


};