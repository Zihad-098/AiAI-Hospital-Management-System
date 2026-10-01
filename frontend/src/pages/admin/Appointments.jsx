import { useEffect, useState } from "react";
import API from "../../services/api";


function Appointments(){


    const [appointments,setAppointments] = useState([]);

    const [patients,setPatients] = useState([]);

    const [doctors,setDoctors] = useState([]);



    const [form,setForm] = useState({

        patient:"",
        doctor:"",
        appointmentDate:"",
        problem:"",
        status:"Pending"

    });






    // Load Data

    const loadData = async()=>{


        try{


            const patientResponse = await API.get(
                "/patients"
            );


            const doctorResponse = await API.get(
                "/doctors"
            );


            const appointmentResponse = await API.get(
                "/appointments"
            );



            setPatients(
                patientResponse.data
            );


            setDoctors(
                doctorResponse.data
            );


            setAppointments(
                appointmentResponse.data
            );



        }


        catch(error){


            console.log(
                "Loading Error:",
                error
            );


        }


    };







    useEffect(()=>{


        loadData();


    },[]);








    // Input Change

    const handleChange=(e)=>{


        setForm({

            ...form,

            [e.target.name]:e.target.value

        });


    };









    // Create Appointment

    const addAppointment = async()=>{


        try{


            await API.post(

                "/appointments",

                form

            );


            alert(
                "Appointment Created Successfully"
            );



            setForm({

                patient:"",
                doctor:"",
                appointmentDate:"",
                problem:"",
                status:"Pending"

            });



            loadData();



        }


        catch(error){


            console.log(

                error.response

            );


            alert(

                error.response?.data?.message ||

                "Appointment Failed"

            );


        }


    };









    // Update Appointment Status

    const updateStatus = async(id,status)=>{


        try{


            await API.put(

                `/appointments/${id}`,

                {
                    status
                }

            );


            alert(
                "Status Updated Successfully"
            );


            loadData();



        }


        catch(error){


            console.log(

                error.response

            );


        }


    };









    // Delete Appointment

    const deleteAppointment = async(id)=>{


        try{


            await API.delete(

                `/appointments/${id}`

            );


            alert(
                "Appointment Deleted"
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
                Appointment Management
            </h1>





            <h2>
                Create Appointment
            </h2>








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









            <select

                name="doctor"

                value={form.doctor}

                onChange={handleChange}

            >


                <option value="">

                    Select Doctor

                </option>




                {

                    doctors.map((doctor)=>(


                        <option

                            key={doctor._id}

                            value={doctor._id}

                        >

                            {doctor.name}

                        </option>


                    ))

                }



            </select>









            <input

                type="date"

                name="appointmentDate"

                value={form.appointmentDate}

                onChange={handleChange}

            />








            <input

                type="text"

                name="problem"

                placeholder="Enter Problem"

                value={form.problem}

                onChange={handleChange}

            />








            <button

                onClick={addAppointment}

            >

                Create Appointment

            </button>









            <h2>
                Appointment List
            </h2>









            <table border="1">


                <thead>


                    <tr>


                        <th>
                            Patient
                        </th>


                        <th>
                            Doctor
                        </th>


                        <th>
                            Date
                        </th>


                        <th>
                            Problem
                        </th>


                        <th>
                            Status
                        </th>


                        <th>
                            Action
                        </th>


                    </tr>


                </thead>








                <tbody>


                {


                    appointments.map((appointment)=>(



                        <tr key={appointment._id}>


                            <td>

                                {
                                appointment.patient?.name ||
                                "Unknown"
                                }

                            </td>




                            <td>

                                {
                                appointment.doctor?.name ||
                                "Unknown"
                                }

                            </td>




                            <td>

                                {
                                new Date(
                                    appointment.appointmentDate
                                ).toLocaleDateString()
                                }

                            </td>




                            <td>

                                {
                                appointment.problem
                                }

                            </td>





                            <td>


                                <select


                                value={appointment.status}


                                onChange={(e)=>

                                    updateStatus(

                                        appointment._id,

                                        e.target.value

                                    )

                                }


                                >



                                <option value="Pending">

                                    Pending

                                </option>



                                <option value="Confirmed">

                                    Confirmed

                                </option>



                                <option value="Completed">

                                    Completed

                                </option>



                                <option value="Cancelled">

                                    Cancelled

                                </option>



                                </select>



                            </td>







                            <td>


                                <button


                                onClick={()=>deleteAppointment(

                                    appointment._id

                                )}


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


export default Appointments;