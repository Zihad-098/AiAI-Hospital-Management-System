import { useEffect, useState } from "react";
import API from "../../services/api";


function Rooms(){


    const [rooms,setRooms] = useState([]);

    const [patients,setPatients] = useState([]);


    const [editId,setEditId] = useState(null);





    const [form,setForm] = useState({

        roomNumber:"",

        type:"General Ward",

        status:"Available",

        patient:""

    });









    const loadData = async()=>{


        try{


            const roomResponse = await API.get(
                "/rooms"
            );


            const patientResponse = await API.get(
                "/patients"
            );



            setRooms(
                roomResponse.data
            );


            setPatients(
                patientResponse.data
            );



        }


        catch(error){

            console.log(error);

        }


    };







    useEffect(()=>{


        loadData();


    },[]);









    const handleChange=(e)=>{


        setForm({

            ...form,

            [e.target.name]:e.target.value

        });


    };









    // Add / Update Room

    const saveRoom = async()=>{


        try{


            if(editId){


                await API.put(

                    `/rooms/${editId}`,

                    form

                );


                alert(
                    "Room Updated Successfully"
                );


            }


            else{


                await API.post(

                    "/rooms",

                    form

                );


                alert(
                    "Room Added Successfully"
                );


            }






            setForm({

                roomNumber:"",

                type:"General Ward",

                status:"Available",

                patient:""

            });



            setEditId(null);



            loadData();



        }


        catch(error){


            console.log(error);


            alert(
                "Operation Failed"
            );


        }


    };









    // Edit Room

    const editRoom=(room)=>{


        setForm({

            roomNumber:room.roomNumber,

            type:room.type,

            status:room.status,

            patient:room.patient?._id || ""

        });


        setEditId(
            room._id
        );


    };









    // Release Patient

    const releasePatient = async(id)=>{


        try{


            await API.put(

                `/rooms/release/${id}`

            );


            alert(
                "Patient Released"
            );


            loadData();



        }


        catch(error){


            console.log(error);


        }


    };









    // Delete Room

    const deleteRoom = async(id)=>{


        try{


            await API.delete(

                `/rooms/${id}`

            );


            alert(
                "Room Deleted"
            );


            loadData();



        }


        catch(error){


            console.log(error);


        }


    };









    return(


        <div>



            <h1>

                🏥 Room Management

            </h1>





            <h2>

                {
                    editId
                    ?
                    "Update Room"
                    :
                    "Add New Room"
                }

            </h2>









            <input

                name="roomNumber"

                placeholder="Room Number"

                value={form.roomNumber}

                onChange={handleChange}

            />







            <select

                name="type"

                value={form.type}

                onChange={handleChange}

            >

                <option>
                    General Ward
                </option>


                <option>
                    Single Cabin
                </option>


                <option>
                    VIP Cabin
                </option>


                <option>
                    ICU
                </option>


            </select>







            <select

                name="status"

                value={form.status}

                onChange={handleChange}

            >

                <option>
                    Available
                </option>


                <option>
                    Occupied
                </option>


            </select>







            <select

                name="patient"

                value={form.patient}

                onChange={handleChange}

            >

                <option value="">

                    Select Patient

                </option>



                {

                    patients.map((patient)=>(


                        <option

                            key={patient._id}

                            value={patient._id}

                        >

                            {patient.name}

                        </option>


                    ))

                }


            </select>







            <button onClick={saveRoom}>


                {

                editId

                ?

                "Update Room"

                :

                "Add Room"

                }


            </button>









            <h2>

                Room List

            </h2>









            <table border="1">


                <thead>


                    <tr>


                        <th>
                            Room Number
                        </th>


                        <th>
                            Type
                        </th>


                        <th>
                            Status
                        </th>


                        <th>
                            Patient
                        </th>


                        <th>
                            Action
                        </th>


                    </tr>


                </thead>







                <tbody>


                {


                    rooms.map((room)=>(


                        <tr key={room._id}>


                            <td>
                                {room.roomNumber}
                            </td>



                            <td>
                                {room.type}
                            </td>



                            <td>
                                {room.status}
                            </td>



                            <td>

                                {
                                room.patient?.name ||
                                "None"
                                }

                            </td>





                            <td>


                                <button

                                onClick={()=>editRoom(room)}

                                >

                                    Edit

                                </button>





                                {

                                room.patient &&

                                <button

                                onClick={()=>releasePatient(room._id)}

                                >

                                    Release

                                </button>

                                }




                                <button

                                onClick={()=>deleteRoom(room._id)}

                                >

                                    Delete

                                </button>



                            </td>


                        </tr>


                    ))

                }


                </tbody>



            </table>




        </div>


    );


}


export default Rooms;