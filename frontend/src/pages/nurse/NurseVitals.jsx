import { useEffect, useState } from "react";
import API from "../../services/api";
import "./Nurse.css";


function NurseVitals(){


    const [vitals,setVitals] = useState([]);

    const [patients,setPatients] = useState([]);




    const [form,setForm] = useState({

        patient:"",

        temperature:"",

        bloodPressure:"",

        heartRate:"",

        oxygenLevel:""

    });









    // Load Patients and Vitals

    const loadData = async()=>{


        try{


            const patientResponse = await API.get(

                "/patients"

            );


            const vitalResponse = await API.get(

                "/vitals"

            );



            setPatients(

                patientResponse.data

            );


            setVitals(

                vitalResponse.data

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









    // Add Vital

    const addVital = async()=>{


        try{


            await API.post(

                "/vitals",

                form

            );


            alert(

                "Vital Signs Added Successfully"

            );



            setForm({

                patient:"",

                temperature:"",

                bloodPressure:"",

                heartRate:"",

                oxygenLevel:""

            });



            loadData();



        }


        catch(error){


            console.log(error);


            alert(

                "Failed to Add Vital Signs"

            );


        }


    };









    return(


        <div className="nurse-page">





            <h1>

                ❤️ Vital Signs Monitoring

            </h1>









            <h2>

                Add Patient Vital Signs

            </h2>









            <div className="nurse-form">





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

                    name="temperature"

                    placeholder="Temperature"

                    value={form.temperature}

                    onChange={handleChange}

                />









                <input

                    name="bloodPressure"

                    placeholder="Blood Pressure"

                    value={form.bloodPressure}

                    onChange={handleChange}

                />









                <input

                    name="heartRate"

                    placeholder="Heart Rate"

                    value={form.heartRate}

                    onChange={handleChange}

                />









                <input

                    name="oxygenLevel"

                    placeholder="Oxygen Level"

                    value={form.oxygenLevel}

                    onChange={handleChange}

                />









                <button onClick={addVital}>

                    Save Vital Signs

                </button>





            </div>









            <h2>

                Patient Vital History

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
                            Temperature
                        </th>


                        <th>
                            Blood Pressure
                        </th>


                        <th>
                            Heart Rate
                        </th>


                        <th>
                            Oxygen Level
                        </th>


                        <th>
                            Date
                        </th>


                    </tr>


                </thead>









                <tbody>


                {


                    vitals.map((vital)=>(


                        <tr key={vital._id}>


                            <td>

                                {

                                vital.patient?.name ||

                                "Unknown"

                                }

                            </td>



                            <td>

                                {vital.temperature}

                            </td>



                            <td>

                                {vital.bloodPressure}

                            </td>



                            <td>

                                {vital.heartRate}

                            </td>



                            <td>

                                {vital.oxygenLevel}

                            </td>



                            <td>

                                {

                                new Date(

                                    vital.date

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



export default NurseVitals;