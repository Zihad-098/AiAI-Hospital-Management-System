import { useEffect, useState } from "react";
import API from "../../services/api";


function Patients(){


    const nurses = [

        {
            id:"nurse1",
            name:"Nurse Fatema"
        },

        {
            id:"nurse2",
            name:"Nurse Rahima"
        },

        {
            id:"nurse3",
            name:"Nurse Ayesha"
        }

    ];



    const [patients,setPatients] = useState([]);



    const [form,setForm] = useState({

        name:"",
        email:"",
        phone:"",
        age:"",
        gender:"",
        address:"",
        disease:""

    });



    const [editId,setEditId] = useState(null);






    const fetchPatients = async()=>{


        try{


            const response = await API.get(

                "/patients"

            );


            setPatients(

                response.data

            );


        }


        catch(error){


            console.log(error);


        }


    };







    useEffect(()=>{


        fetchPatients();


    },[]);









    const handleChange=(e)=>{


        setForm({

            ...form,

            [e.target.name]:e.target.value

        });


    };









    const savePatient = async()=>{


        try{


            if(editId){


                await API.put(

                    `/patients/${editId}`,

                    form

                );


                alert(

                    "Patient Updated Successfully"

                );


            }

            else{


                await API.post(

                    "/patients",

                    form

                );


                alert(

                    "Patient Added Successfully"

                );


            }



            setForm({

                name:"",
                email:"",
                phone:"",
                age:"",
                gender:"",
                address:"",
                disease:""

            });



            setEditId(null);


            fetchPatients();



        }


        catch(error){


            console.log(error);


        }


    };









    const editPatient=(patient)=>{


        setForm({

            name:patient.name,

            email:patient.email,

            phone:patient.phone,

            age:patient.age,

            gender:patient.gender,

            address:patient.address,

            disease:patient.disease

        });


        setEditId(

            patient._id

        );


    };









    const deletePatient = async(id)=>{


        try{


            await API.delete(

                `/patients/${id}`

            );


            alert(

                "Patient Deleted"

            );


            fetchPatients();



        }


        catch(error){


            console.log(error);


        }


    };









    // Assign Nurse

    const assignNurse = async(patientId,nurseId)=>{


        try{


            console.log(
                "Patient ID:",
                patientId
            );


            console.log(
                "Nurse ID:",
                nurseId
            );



            const response = await API.put(

                `/patients/assign-nurse/${patientId}`,

                {

                    nurseId:nurseId

                }

            );



            console.log(

                "Response:",

                response.data

            );



            alert(

                "Nurse Assigned Successfully"

            );



            fetchPatients();



        }


        catch(error){


            console.log(

                "Assign Nurse Error:",

                error.response?.data || error.message

            );


            alert(

                "Nurse Assignment Failed"

            );


        }


    };









    return(


        <div>


            <h1>

                Patient Management

            </h1>





            <h2>

                Add New Patient

            </h2>





            <input

                name="name"

                placeholder="Patient Name"

                value={form.name}

                onChange={handleChange}

            />



            <input

                name="email"

                placeholder="Email"

                value={form.email}

                onChange={handleChange}

            />



            <input

                name="phone"

                placeholder="Phone"

                value={form.phone}

                onChange={handleChange}

            />



            <input

                name="age"

                placeholder="Age"

                value={form.age}

                onChange={handleChange}

            />



            <input

                name="gender"

                placeholder="Gender"

                value={form.gender}

                onChange={handleChange}

            />



            <input

                name="address"

                placeholder="Address"

                value={form.address}

                onChange={handleChange}

            />



            <input

                name="disease"

                placeholder="Disease"

                value={form.disease}

                onChange={handleChange}

            />





            <button onClick={savePatient}>

                Add Patient

            </button>









            <h2>

                Patient List

            </h2>









            <table border="1">


                <thead>


                    <tr>


                        <th>
                            Name
                        </th>


                        <th>
                            Email
                        </th>


                        <th>
                            Age
                        </th>


                        <th>
                            Gender
                        </th>


                        <th>
                            Disease
                        </th>


                        <th>
                            Assign Nurse
                        </th>


                        <th>
                            Action
                        </th>


                    </tr>


                </thead>









                <tbody>


                {


                    patients.map((patient)=>(


                        <tr key={patient._id}>


                            <td>
                                {patient.name}
                            </td>


                            <td>
                                {patient.email}
                            </td>


                            <td>
                                {patient.age}
                            </td>


                            <td>
                                {patient.gender}
                            </td>


                            <td>
                                {patient.disease}
                            </td>





                            <td>


                                <select

                                onChange={(e)=>{


                                    assignNurse(

                                        patient._id,

                                        e.target.value

                                    );


                                }}

                                >


                                    <option value="">

                                        Select Nurse

                                    </option>



                                    {


                                    nurses.map((nurse)=>(


                                        <option

                                        key={nurse.id}

                                        value={nurse.id}

                                        >

                                            {nurse.name}

                                        </option>


                                    ))

                                    }



                                </select>


                            </td>





                            <td>


                                <button

                                onClick={()=>editPatient(patient)}

                                >

                                    Edit

                                </button>





                                <button

                                onClick={()=>deletePatient(patient._id)}

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



export default Patients;