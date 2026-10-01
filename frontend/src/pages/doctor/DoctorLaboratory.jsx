import { useEffect, useState } from "react";
import API from "../../services/api";


function DoctorLaboratory(){


    const [reports,setReports] = useState([]);




    // Load Laboratory Reports

    const loadReports = async()=>{


        try{


            const response = await API.get(

                "/laboratory"

            );


            setReports(

                response.data

            );



        }


        catch(error){


            console.log(error);


        }


    };







    useEffect(()=>{


        loadReports();


    },[]);









    return(


        <div>


            <h1>

                🧪 Doctor Laboratory Reports

            </h1>





            <h2>

                Patient Test Results

            </h2>









            <table border="1">


                <thead>


                    <tr>


                        <th>
                            Patient
                        </th>


                        <th>
                            Test Name
                        </th>


                        <th>
                            Result
                        </th>


                        <th>
                            Status
                        </th>


                        <th>
                            Report Date
                        </th>


                    </tr>


                </thead>








                <tbody>


                {


                    reports.map((report)=>(


                        <tr key={report._id}>


                            <td>

                                {

                                report.patient?.name ||

                                "Unknown"

                                }

                            </td>




                            <td>

                                {

                                report.testName

                                }

                            </td>




                            <td>

                                {

                                report.result

                                }

                            </td>




                            <td>

                                {

                                report.status

                                }

                            </td>




                            <td>

                                {

                                new Date(

                                    report.reportDate

                                ).toLocaleDateString()

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


export default DoctorLaboratory;