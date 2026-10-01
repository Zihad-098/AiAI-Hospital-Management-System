import { useEffect, useState } from "react";
import API from "../../services/api";


function DoctorMedicalRecords(){


    const [patients,setPatients] = useState([]);

    const [records,setRecords] = useState([]);





    const [form,setForm] = useState({

        patient:"",

        diagnosis:"",

        medicine:"",

        dose:"",

        time:"",

        duration:"",

        testReport:"",

        notes:""

    });









    const loadData = async()=>{


        try{


            const patientResponse = await API.get(

                "/patients"

            );


            const recordResponse = await API.get(

                "/medical-records"

            );



            setPatients(

                patientResponse.data

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









    const handleChange=(e)=>{


        setForm({

            ...form,

            [e.target.name]:e.target.value

        });


    };









    const addRecord = async()=>{


        try{


            const doctorId = localStorage.getItem(

                "userId"

            );



            if(!doctorId){


                alert(

                    "Doctor ID not found. Please login again."

                );


                return;


            }







            const recordData = {


                patient:form.patient,


                doctor:doctorId,



                diagnosis:form.diagnosis,



                prescriptions:[

                    {

                        medicine:form.medicine,

                        dose:form.dose,

                        time:form.time,

                        duration:form.duration

                    }

                ],



                testReport:form.testReport,


                notes:form.notes


            };





            console.log(

                "Sending Medical Record:",

                recordData

            );







            await API.post(

                "/medical-records",

                recordData

            );





            alert(

                "Medical Record Added"

            );





            setForm({

                patient:"",

                diagnosis:"",

                medicine:"",

                dose:"",

                time:"",

                duration:"",

                testReport:"",

                notes:""

            });



            loadData();



        }


        catch(error){


            console.log(

                "Medical Record Error:",

                error.response?.data || error

            );



            alert(

                error.response?.data?.message ||

                "Failed to add record"

            );


        }


    };









    return(


        <div>


            <h1>

                📝 Doctor Medical Records

            </h1>





            <h2>

                Add Patient Record

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









            <input

                name="diagnosis"

                placeholder="Diagnosis"

                value={form.diagnosis}

                onChange={handleChange}

            />









            <h3>

                Prescription

            </h3>









            <input

                name="medicine"

                placeholder="Medicine Name"

                value={form.medicine}

                onChange={handleChange}

            />









            <input

                name="dose"

                placeholder="Dose (Example: 500mg)"

                value={form.dose}

                onChange={handleChange}

            />









            <input

                name="time"

                placeholder="Time (Example: 8:00 AM)"

                value={form.time}

                onChange={handleChange}

            />









            <input

                name="duration"

                placeholder="Duration (Example: 5 days)"

                value={form.duration}

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









            <button onClick={addRecord}>

                Save Record

            </button>









            <h2>

                Patient History

            </h2>









            <table border="1">


                <thead>


                    <tr>

                        <th>
                            Patient
                        </th>

                        <th>
                            Diagnosis
                        </th>

                        <th>
                            Medicine
                        </th>

                        <th>
                            Dose
                        </th>

                        <th>
                            Time
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

                            {record.diagnosis}

                        </td>



                        <td>

                            {record.prescriptions?.[0]?.medicine}

                        </td>



                        <td>

                            {record.prescriptions?.[0]?.dose}

                        </td>



                        <td>

                            {record.prescriptions?.[0]?.time}

                        </td>


                    </tr>


                ))

                }



                </tbody>



            </table>





        </div>


    );


}



export default DoctorMedicalRecords;