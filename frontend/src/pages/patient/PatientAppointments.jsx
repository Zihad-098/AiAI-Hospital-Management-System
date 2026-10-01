import { useEffect, useState } from "react";
import API from "../../services/api";


function PatientAppointments(){


    const [appointments,setAppointments] = useState([]);




    const loadAppointments = async()=>{


        try{


            const response = await API.get(
                "/appointments"
            );


            setAppointments(
                response.data
            );


        }


        catch(error){


            console.log(error);


        }


    };





    useEffect(()=>{


        loadAppointments();


    },[]);






    return(


        <div>


            <h1>
                📅 My Appointments
            </h1>



            <h2>
                Appointment History
            </h2>





            <table border="1">


                <thead>

                    <tr>

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


                    </tr>

                </thead>





                <tbody>


                {

                    appointments.map((appointment)=>(


                        <tr key={appointment._id}>


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

                                {
                                appointment.status
                                }

                            </td>


                        </tr>


                    ))

                }


                </tbody>


            </table>


        </div>


    );


}


export default PatientAppointments;