const express = require("express");

const router = express.Router();


console.log("Room route loaded");





const {

    addRoom,

    getRooms,

    deleteRoom,

    updateRoom,

    releasePatient

} = require("../controllers/roomController");









// Create Room

router.post(

    "/",

    addRoom

);









// Get Rooms

router.get(

    "/",

    getRooms

);









// Update Room

router.put(

    "/:id",

    updateRoom

);









// Release Patient From Room

router.put(

    "/release/:id",

    releasePatient

);









// Delete Room

router.delete(

    "/:id",

    deleteRoom

);









module.exports = router;