import { useEffect, useState } from "react";
import API from "../../services/api";
import "./Nurse.css";



function NurseMedications(){


    const [medications,setMedications] = useState([]);




    const [form,setForm] = useState({

        patient:"",

        medicine:"",

        dose:"",

        time:"",

        status:"Pending"

    });









    // Load Medication Schedule

    const loadMedications = async()=>{


        try{


            const response = await API.get(

                "/medications-schedule"

            );


            setMedications(

                response.data

            );



        }


        catch(error){


            console.log(error);


        }


    };









    useEffect(()=>{


        loadMedications();


    },[]);









    // Input Change

    const handleChange=(e)=>{


        setForm({

            ...form,

            [e.target.name]:e.target.value

        });


    };









    // Add Medication

    const addMedication = async()=>{


        try{


            await API.post(

                "/medications-schedule",

                form

            );


            alert(

                "Medication Schedule Added Successfully"

            );



            setForm({

                patient:"",

                medicine:"",

                dose:"",

                time:"",

                status:"Pending"

            });



            loadMedications();



        }


        catch(error){


            console.log(error);


            alert(

                "Failed to Add Medication"

            );


        }


    };









    // Delete Medication

    const deleteMedication = async(id)=>{


        try{


            await API.delete(

                `/medications-schedule/${id}`

            );


            loadMedications();



        }


        catch(error){


            console.log(error);


        }


    };









    return(


        <div className="nurse-page">





            <h1>

                💊 Medication Schedule

            </h1>





            <h2>

                Patient Medicine Timing

            </h2>









            <div className="nurse-form">





                <input

                    name="patient"

                    placeholder="Patient Name"

                    value={form.patient}

                    onChange={handleChange}

                />









                <input

                    name="medicine"

                    placeholder="Medicine Name"

                    value={form.medicine}

                    onChange={handleChange}

                />









                <input

                    name="dose"

                    placeholder="Dose (e.g. 500mg)"

                    value={form.dose}

                    onChange={handleChange}

                />









                <input

                    name="time"

                    placeholder="Time (e.g. 8:00 AM)"

                    value={form.time}

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









                <button onClick={addMedication}>

                    Save Schedule

                </button>





            </div>









            <h2>

                Medication History

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
                            Medicine
                        </th>


                        <th>
                            Dose
                        </th>


                        <th>
                            Time
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


                    medications.map((medication)=>(


                        <tr key={medication._id}>


                            <td>

                                {medication.patient}

                            </td>




                            <td>

                                {medication.medicine}

                            </td>




                            <td>

                                {medication.dose}

                            </td>




                            <td>

                                {medication.time}

                            </td>




                            <td>

                                {medication.status}

                            </td>




                            <td>

                                {

                                new Date(

                                    medication.date

                                ).toLocaleDateString()

                                }

                            </td>




                            <td>


                                <button

                                onClick={()=>deleteMedication(medication._id)}

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



export default NurseMedications;