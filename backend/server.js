const express = require("express");
const cors = require("cors");
require("dotenv").config();




const connectDB = require("./config/db");




// Routes

const authRoutes = require("./routes/authRoutes");

const doctorRoutes = require("./routes/doctorRoutes");

const patientRoutes = require("./routes/patientRoutes");

const appointmentRoutes = require("./routes/appointmentRoutes");

const medicalRecordRoutes = require("./routes/medicalRecordRoutes");

const billingRoutes = require("./routes/billingRoutes");

const roomRoutes = require("./routes/roomRoutes");

const medicineRoutes = require("./routes/medicineRoutes");

const laboratoryRoutes = require("./routes/laboratoryRoutes");

const vitalRoutes = require("./routes/vitalRoutes");

const nursingReportRoutes = require("./routes/nursingReportRoutes");

const medicationRoutes = require("./routes/medicationRoutes");









const app = express();









// Connect MongoDB

connectDB();









// Middleware

app.use(cors());

app.use(express.json());









// Authentication Routes

app.use(

    "/api/auth",

    authRoutes

);









// Doctor Routes

app.use(

    "/api/doctors",

    doctorRoutes

);









// Patient Routes

app.use(

    "/api/patients",

    patientRoutes

);









// Appointment Routes

app.use(

    "/api/appointments",

    appointmentRoutes

);









// Medical Record Routes

app.use(

    "/api/medical-records",

    medicalRecordRoutes

);









// Billing Routes

app.use(

    "/api/billing",

    billingRoutes

);









// Room Routes

app.use(

    "/api/rooms",

    roomRoutes

);









// Medicine Routes

app.use(

    "/api/medicines",

    medicineRoutes

);









// Laboratory Routes

app.use(

    "/api/laboratory",

    laboratoryRoutes

);









// Vital Signs Routes

app.use(

    "/api/vitals",

    vitalRoutes

);









// Nursing Reports Routes

app.use(

    "/api/nursing-reports",

    nursingReportRoutes

);









// Medication Schedule Routes

app.use(

    "/api/medications-schedule",

    medicationRoutes

);









// Test API

app.get("/", (req,res)=>{


    res.send("AI Hospital Backend Running");


});









// Start Server

app.listen(process.env.PORT,()=>{


    console.log(

        `Server running on port ${process.env.PORT}`

    );


});