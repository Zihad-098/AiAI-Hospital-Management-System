import { useEffect, useState } from "react";
import API from "../../services/api";
import "./Laboratory.css";


function Laboratory(){


    const [reports,setReports] = useState([]);

    const [patients,setPatients] = useState([]);

    const [doctors,setDoctors] = useState([]);






    const [form,setForm] = useState({

        patient:"",

        doctor:"",

        testName:"",

        result:"",

        status:"Pending",

        reportDate:""

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


            const reportResponse = await API.get(
                "/laboratory"
            );



            setPatients(
                patientResponse.data
            );


            setDoctors(
                doctorResponse.data
            );


            setReports(
                reportResponse.data
            );



        }


        catch(error){


            console.log(error);


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









    // Add Report

    const addReport = async()=>{


        try{


            await API.post(

                "/laboratory",

                form

            );



            alert(

                "Laboratory Report Added Successfully"

            );



            setForm({

                patient:"",

                doctor:"",

                testName:"",

                result:"",

                status:"Pending",

                reportDate:""

            });



            loadData();



        }


        catch(error){


            console.log(error);


            alert(

                "Failed"

            );


        }


    };









    // Delete Report

    const deleteReport = async(id)=>{


        try{


            await API.delete(

                `/laboratory/${id}`

            );


            loadData();



        }


        catch(error){


            console.log(error);


        }


    };









    return(


        <div className="laboratory">





            <h1>

                🔬 Laboratory Management

            </h1>








            <h2>

                Add Laboratory Report

            </h2>








            <div className="laboratory-form">





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

                    name="testName"

                    placeholder="Test Name"

                    value={form.testName}

                    onChange={handleChange}

                />









                <input

                    name="result"

                    placeholder="Result"

                    value={form.result}

                    onChange={handleChange}

                />









                <select

                    name="status"

                    value={form.status}

                    onChange={handleChange}

                >


                    <option value="Pending">

                        Pending

                    </option>



                    <option value="Completed">

                        Completed

                    </option>



                </select>









                <input

                    type="date"

                    name="reportDate"

                    value={form.reportDate}

                    onChange={handleChange}

                />









                <button

                    onClick={addReport}

                >

                    Add Report

                </button>





            </div>









            <h2>

                Laboratory Reports

            </h2>









            <table

                className="laboratory-table"

                border="1"

            >


                <thead>


                    <tr>


                        <th>
                            Patient
                        </th>


                        <th>
                            Doctor
                        </th>


                        <th>
                            Test
                        </th>


                        <th>
                            Result
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

                                report.doctor?.name ||

                                "Unknown"

                                }

                            </td>





                            <td>

                                {report.testName}

                            </td>





                            <td>

                                {report.result}

                            </td>





                            <td>

                                {report.status}

                            </td>





                            <td>


                                <button

                                onClick={()=>deleteReport(report._id)}

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



export default Laboratory;