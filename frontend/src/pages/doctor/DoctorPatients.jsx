import { useEffect, useState } from "react";
import API from "../../services/api";


function DoctorPatients(){


    const [patients,setPatients] = useState([]);



    const loadPatients = async()=>{


        try{


            const response = await API.get(
                "/patients"
            );


            setPatients(
                response.data
            );


        }


        catch(error){


            console.log(error);


        }


    };





    useEffect(()=>{


        loadPatients();


    },[]);






    return(


        <div>


            <h1>
                👥 My Patients
            </h1>



            <h2>
                Patient Information
            </h2>





            <table border="1">


                <thead>


                    <tr>


                        <th>
                            Name
                        </th>


                        <th>
                            Email
                        </th>


                        <th>
                            Phone
                        </th>


                        <th>
                            Disease
                        </th>


                        <th>
                            Address
                        </th>


                    </tr>


                </thead>





                <tbody>


                {


                    patients.map((patient)=>(


                        <tr key={patient._id}>


                            <td>

                                {patient.name}

                            </td>


                            <td>

                                {patient.email}

                            </td>


                            <td>

                                {patient.phone}

                            </td>


                            <td>

                                {patient.disease}

                            </td>


                            <td>

                                {patient.address}

                            </td>



                        </tr>


                    ))


                }


                </tbody>



            </table>



        </div>


    );


}


export default DoctorPatients;