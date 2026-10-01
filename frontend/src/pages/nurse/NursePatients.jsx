import { useEffect, useState } from "react";
import API from "../../services/api";
import "./Nurse.css";



function NursePatients(){


    const [patients,setPatients] = useState([]);




    // Get logged in nurse ID

    const nurseId = localStorage.getItem("userId");



    console.log(

        "Current Nurse ID:",

        nurseId

    );









    // Load Assigned Patients

    const loadPatients = async()=>{


        try{


            if(!nurseId){


                console.log(

                    "No Nurse ID Found"

                );


                return;


            }







            const response = await API.get(

                `/patients/assigned/${nurseId}`

            );



            console.log(

                "API Response:",

                response.data

            );



            setPatients(

                response.data

            );



        }


        catch(error){


            console.log(

                "Patient Load Error:",

                error

            );


        }


    };









    useEffect(()=>{


        loadPatients();


    },[]);









    return(


        <div className="nurse-page">





            <h1>

                🧑‍🤝‍🧑 Assigned Patients

            </h1>





            <h2>

                Patient Information

            </h2>





            <h3>

                Nurse ID: {nurseId}

            </h3>









            <table

                className="nurse-table"

                border="1"

            >


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




                        </tr>


                    ))

                }


                </tbody>



            </table>





        </div>


    );


}



export default NursePatients;