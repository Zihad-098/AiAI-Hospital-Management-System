const Appointment = require("../models/Appointment");




// Add Appointment

const addAppointment = async(req,res)=>{

    try{


        const appointment = await Appointment.create(

            req.body

        );


        res.status(201).json({

            message:"Appointment created successfully",

            appointment

        });


    }

    catch(error){


        res.status(500).json({

            message:error.message

        });


    }

};







// Get All Appointments

const getAppointments = async(req,res)=>{


    try{


        const appointments = await Appointment.find()

        .populate("patient")

        .populate("doctor");



        res.json(appointments);


    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};







// Delete Appointment

const deleteAppointment = async(req,res)=>{


    try{


        await Appointment.findByIdAndDelete(

            req.params.id

        );


        res.json({

            message:"Appointment deleted successfully"

        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};







// Update Appointment

const updateAppointment = async(req,res)=>{


    try{


        const appointment = await Appointment.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new:true

            }

        );



        res.json({

            message:"Appointment updated successfully",

            appointment

        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};







module.exports = {


    addAppointment,

    getAppointments,

    deleteAppointment,

    updateAppointment


};