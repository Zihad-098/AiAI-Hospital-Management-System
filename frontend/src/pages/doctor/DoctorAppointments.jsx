import { useEffect, useState } from "react";
import API from "../../services/api";


function DoctorAppointments(){


    const [appointments,setAppointments] = useState([]);





    // Load Appointments

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

                "Appointment Status Updated"

            );



            loadAppointments();



        }


        catch(error){


            console.log(

                error.response

            );


        }


    };









    return(


        <div>


            <h1>

                📅 Doctor Appointments

            </h1>





            <h2>

                Patient Appointment List

            </h2>









            <table border="1">


                <thead>


                    <tr>


                        <th>

                            Patient

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

                                appointment.patient?.name ||

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






                        </tr>



                    ))

                }


                </tbody>



            </table>




        </div>


    );


}


export default DoctorAppointments;