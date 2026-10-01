import { useEffect, useState } from "react";
import API from "../../services/api";


function MedicalRecords(){


    const [records,setRecords] = useState([]);

    const [patients,setPatients] = useState([]);

    const [doctors,setDoctors] = useState([]);



    const [editId,setEditId] = useState(null);



    const [form,setForm] = useState({

        patient:"",
        doctor:"",
        diagnosis:"",
        prescription:"",
        testReport:"",
        notes:""

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


            const recordResponse = await API.get(
                "/medical-records"
            );



            setPatients(
                patientResponse.data
            );


            setDoctors(
                doctorResponse.data
            );


            setRecords(
                recordResponse.data
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









    // Add / Update Medical Record

    const saveRecord = async()=>{


        try{


            if(editId){


                await API.put(

                    `/medical-records/${editId}`,

                    form

                );


                alert(
                    "Medical Record Updated Successfully"
                );


            }


            else{


                await API.post(

                    "/medical-records",

                    form

                );


                alert(
                    "Medical Record Added Successfully"
                );


            }






            setForm({

                patient:"",
                doctor:"",
                diagnosis:"",
                prescription:"",
                testReport:"",
                notes:""

            });



            setEditId(null);



            loadData();



        }


        catch(error){


            console.log(
                error.response
            );


            alert(

                error.response?.data?.message ||

                "Operation Failed"

            );


        }


    };









    // Edit Record

    const editRecord=(record)=>{


        setForm({


            patient:record.patient._id,

            doctor:record.doctor._id,

            diagnosis:record.diagnosis,

            prescription:record.prescription,

            testReport:record.testReport,

            notes:record.notes || ""


        });



        setEditId(
            record._id
        );


    };









    // Delete Record

    const deleteRecord = async(id)=>{


        try{


            await API.delete(

                `/medical-records/${id}`

            );


            alert(
                "Record Deleted"
            );


            loadData();



        }


        catch(error){

            console.log(error);

        }


    };









    return(


        <div>


            <h1>
                Medical Records Management
            </h1>





            <h2>

            {

                editId

                ?

                "Update Medical Record"

                :

                "Add Medical Record"

            }

            </h2>








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

                name="diagnosis"

                placeholder="Diagnosis"

                value={form.diagnosis}

                onChange={handleChange}

            />






            <input

                name="prescription"

                placeholder="Prescription"

                value={form.prescription}

                onChange={handleChange}

            />







            <input

                name="testReport"

                placeholder="Test Report"

                value={form.testReport}

                onChange={handleChange}

            />







            <input

                name="notes"

                placeholder="Notes"

                value={form.notes}

                onChange={handleChange}

            />








            <button onClick={saveRecord}>


            {

                editId

                ?

                "Update Record"

                :

                "Add Record"

            }


            </button>









            <h2>
                Medical History
            </h2>








            <table border="1">


                <thead>

                    <tr>

                        <th>
                            Patient
                        </th>

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

                        <th>
                            Action
                        </th>


                    </tr>

                </thead>







                <tbody>


                {

                    records.map((record)=>(


                        <tr key={record._id}>


                            <td>
                                {record.patient?.name}
                            </td>



                            <td>
                                {record.doctor?.name}
                            </td>



                            <td>
                                {record.diagnosis}
                            </td>



                            <td>
                                {record.prescription}
                            </td>



                            <td>
                                {record.testReport}
                            </td>





                            <td>


                                <button

                                onClick={()=>editRecord(record)}

                                >

                                    Edit

                                </button>





                                <button

                                onClick={()=>deleteRecord(record._id)}

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


export default MedicalRecords;