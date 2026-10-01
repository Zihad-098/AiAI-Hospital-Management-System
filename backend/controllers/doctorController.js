const Doctor = require("../models/Doctor");



// Add Doctor
const addDoctor = async (req, res) => {

    try {

        const doctor = await Doctor.create(req.body);


        res.status(201).json({

            message: "Doctor added successfully",

            doctor

        });


    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};






// Get All Doctors
const getDoctors = async (req, res) => {

    try {

        const doctors = await Doctor.find();


        res.json(doctors);


    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};







// Delete Doctor
const deleteDoctor = async (req, res) => {

    try {

        await Doctor.findByIdAndDelete(
            req.params.id
        );


        res.json({

            message: "Doctor deleted successfully"

        });


    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};








// Update Doctor  ✅ NEW FUNCTION

const updateDoctor = async (req, res) => {


    try {


        const doctor = await Doctor.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true
            }

        );



        res.json({

            message: "Doctor updated successfully",

            doctor

        });



    }


    catch (error) {


        res.status(500).json({

            message: error.message

        });


    }


};








module.exports = {


    addDoctor,

    getDoctors,

    deleteDoctor,

    updateDoctor


};