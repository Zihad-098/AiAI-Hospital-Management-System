import { useEffect, useState } from "react";
import API from "../../services/api";


function PatientLaboratory(){


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

                🧪 My Laboratory Reports

            </h1>





            <h2>

                Test Results

            </h2>









            <table border="1">


                <thead>


                    <tr>


                        <th>
                            Doctor
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

                                report.doctor?.name ||

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


export default PatientLaboratory;