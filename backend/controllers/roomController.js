const Room = require("../models/Room");




// Add Room

const addRoom = async(req,res)=>{


    try{


        const room = await Room.create(

            req.body

        );


        res.status(201).json({

            message:"Room created successfully",

            room

        });


    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};








// Get All Rooms

const getRooms = async(req,res)=>{


    try{


        const rooms = await Room.find()

        .populate("patient");



        res.json(rooms);



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};








// Delete Room

const deleteRoom = async(req,res)=>{


    try{


        await Room.findByIdAndDelete(

            req.params.id

        );


        res.json({

            message:"Room deleted successfully"

        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};








// Update Room

const updateRoom = async(req,res)=>{


    try{


        const room = await Room.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new:true

            }

        );


        res.json({

            message:"Room updated successfully",

            room

        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









// Release Patient From Room

const releasePatient = async(req,res)=>{


    try{


        const room = await Room.findByIdAndUpdate(

            req.params.id,

            {

                patient:null,

                status:"Available"

            },

            {

                new:true

            }

        );



        res.json({

            message:"Patient released successfully",

            room

        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};









module.exports = {


    addRoom,

    getRooms,

    deleteRoom,

    updateRoom,

    releasePatient


};