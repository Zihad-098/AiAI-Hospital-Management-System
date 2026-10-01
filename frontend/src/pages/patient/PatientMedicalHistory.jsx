import { useEffect, useState } from "react";
import API from "../../services/api";


function PatientMedicalHistory(){


    const [records,setRecords] = useState([]);




    // Load Medical Records

    const loadRecords = async()=>{


        try{


            const response = await API.get(

                "/medical-records"

            );


            setRecords(

                response.data

            );


        }


        catch(error){


            console.log(error);


        }


    };







    useEffect(()=>{


        loadRecords();


    },[]);








    return(


        <div>


            <h1>
                📋 My Medical History
            </h1>





            <h2>
                Diagnosis & Prescription History
            </h2>









            <table border="1">


                <thead>


                    <tr>


                        <th>
                            Doctor
                        </th>


                        <th>
                            Diagnosis
                        </th>


                        <th>
                            Prescription
                        </th>


                        <th>
                            Test Report
                        </th>


                    </tr>


                </thead>









                <tbody>


                {


                    records.map((record)=>(


                        <tr key={record._id}>


                            <td>

                                {
                                record.doctor?.name ||
                                "Unknown"
                                }

                            </td>






                            <td>

                                {
                                record.diagnosis
                                }

                            </td>






                            <td>

                                {
                                record.prescription
                                }

                            </td>






                            <td>

                                {
                                record.testReport
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


export default PatientMedicalHistory;