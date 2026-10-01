import { useEffect, useState } from "react";
import API from "../../services/api";


function PatientMedicines(){


    const [records,setRecords] = useState([]);




    // Load Medical Records

    const loadMedicines = async()=>{


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


        loadMedicines();


    },[]);







    return(


        <div>


            <h1>
                💊 My Medicines
            </h1>




            <h2>
                Prescribed Medicines
            </h2>







            <table border="1">


                <thead>


                    <tr>


                        <th>
                            Doctor
                        </th>


                        <th>
                            Prescription
                        </th>


                        <th>
                            Diagnosis
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
                                record.prescription
                                }

                            </td>




                            <td>

                                {
                                record.diagnosis
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


export default PatientMedicines;