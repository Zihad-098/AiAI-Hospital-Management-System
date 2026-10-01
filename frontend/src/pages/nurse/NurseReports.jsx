import { useEffect, useState } from "react";
import API from "../../services/api";
import "./Nurse.css";



function NurseReports(){


    const [reports,setReports] = useState([]);



    const [form,setForm] = useState({

        patient:"",

        note:"",

        status:"Active"

    });









    // Load Reports

    const loadReports = async()=>{


        try{


            const response = await API.get(

                "/nursing-reports"

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

                "/nursing-reports",

                form

            );



            alert(

                "Nursing Report Saved Successfully"

            );



            setForm({

                patient:"",

                note:"",

                status:"Active"

            });



            loadReports();



        }


        catch(error){


            console.log(error);


            alert(

                "Failed to Save Report"

            );


        }


    };









    // Delete Report

    const deleteReport = async(id)=>{


        try{


            await API.delete(

                `/nursing-reports/${id}`

            );


            loadReports();



        }


        catch(error){


            console.log(error);


        }


    };









    return(


        <div className="nurse-page">





            <h1>

                📋 Nursing Reports

            </h1>





            <h2>

                Patient Care Reports

            </h2>









            <div className="nurse-form">





                <input

                    name="patient"

                    placeholder="Patient Name"

                    value={form.patient}

                    onChange={handleChange}

                />









                <textarea

                    name="note"

                    placeholder="Write nursing notes..."

                    rows="5"

                    value={form.note}

                    onChange={handleChange}

                />









                <select

                    name="status"

                    value={form.status}

                    onChange={handleChange}

                >

                    <option value="Active">

                        Active

                    </option>


                    <option value="Completed">

                        Completed

                    </option>


                </select>









                <button

                    onClick={addReport}

                >

                    Save Report

                </button>





            </div>









            <h2>

                Report History

            </h2>









            <table

                className="nurse-table"

                border="1"

            >


                <thead>


                    <tr>


                        <th>
                            Patient
                        </th>


                        <th>
                            Note
                        </th>


                        <th>
                            Status
                        </th>


                        <th>
                            Date
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

                                {report.patient}

                            </td>




                            <td>

                                {report.note}

                            </td>




                            <td>

                                {report.status}

                            </td>




                            <td>

                                {

                                new Date(

                                    report.date

                                ).toLocaleDateString()

                                }

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



export default NurseReports;