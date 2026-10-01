import { useEffect, useState } from "react";
import API from "../../services/api";


function Doctors(){


    const [doctors,setDoctors] = useState([]);


    const [form,setForm] = useState({

        name:"",
        email:"",
        phone:"",
        specialization:"",
        experience:"",
        department:""

    });


    const [editId,setEditId] = useState(null);





    // Fetch Doctors

    const fetchDoctors = async()=>{


        try{


            const response = await API.get(
                "/doctors"
            );


            setDoctors(
                response.data
            );


        }


        catch(error){

            console.log(
                "Fetch Doctor Error:",
                error
            );

        }


    };






    useEffect(()=>{


        fetchDoctors();


    },[]);








    // Handle Input

    const handleChange=(e)=>{


        setForm({

            ...form,

            [e.target.name]:e.target.value

        });


    };









    // Add / Update Doctor

    const saveDoctor = async()=>{


        try{


            if(editId){


                const response = await API.put(

                    `/doctors/${editId}`,

                    form

                );


                console.log(
                    "Doctor Updated:",
                    response.data
                );


                alert(
                    "Doctor Updated Successfully"
                );


            }


            else{


                const response = await API.post(

                    "/doctors",

                    form

                );


                console.log(
                    "Doctor Added:",
                    response.data
                );


                alert(
                    "Doctor Added Successfully"
                );


            }





            setForm({

                name:"",
                email:"",
                phone:"",
                specialization:"",
                experience:"",
                department:""

            });



            setEditId(null);



            fetchDoctors();



        }


        catch(error){


            console.log(

                "Doctor Save Error:",

                error.response

            );



            alert(

                error.response?.data?.message ||

                error.message ||

                "Doctor Operation Failed"

            );


        }


    };









    // Edit Doctor

    const editDoctor=(doctor)=>{


        setForm({

            name:doctor.name,

            email:doctor.email,

            phone:doctor.phone,

            specialization:doctor.specialization,

            experience:doctor.experience,

            department:doctor.department

        });


        setEditId(
            doctor._id
        );


    };









    // Delete Doctor

    const deleteDoctor = async(id)=>{


        try{


            await API.delete(

                `/doctors/${id}`

            );


            alert(
                "Doctor Deleted"
            );


            fetchDoctors();


        }


        catch(error){


            console.log(error);


        }


    };









    return(


        <div>


            <h1>
                Doctor Management
            </h1>




            <h2>

            {
                editId
                ?
                "Update Doctor"
                :
                "Add New Doctor"
            }

            </h2>






            <input

                name="name"

                placeholder="Doctor Name"

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

                name="specialization"

                placeholder="Specialization"

                value={form.specialization}

                onChange={handleChange}

            />



            <input

                name="experience"

                placeholder="Experience"

                value={form.experience}

                onChange={handleChange}

            />



            <input

                name="department"

                placeholder="Department"

                value={form.department}

                onChange={handleChange}

            />





            <button onClick={saveDoctor}>


            {
                editId
                ?
                "Update Doctor"
                :
                "Add Doctor"
            }


            </button>






            <h2>
                Doctor List
            </h2>





            <table border="1">


                <thead>

                    <tr>

                        <th>Name</th>

                        <th>Email</th>

                        <th>Specialization</th>

                        <th>Department</th>

                        <th>Action</th>


                    </tr>


                </thead>






                <tbody>


                {


                    doctors.map((doctor)=>(


                        <tr key={doctor._id}>


                            <td>
                                {doctor.name}
                            </td>


                            <td>
                                {doctor.email}
                            </td>


                            <td>
                                {doctor.specialization}
                            </td>


                            <td>
                                {doctor.department}
                            </td>




                            <td>


                                <button

                                onClick={()=>
                                    editDoctor(doctor)
                                }

                                >

                                    Edit

                                </button>




                                <button

                                onClick={()=>
                                    deleteDoctor(doctor._id)
                                }

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


export default Doctors;