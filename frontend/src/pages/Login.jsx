import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Login.css";


function Login(){


    const navigate = useNavigate();



    const [role,setRole] = useState("");

    const [email,setEmail] = useState("");

    const [password,setPassword] = useState("");







    const handleLogin = async()=>{


        console.log("Login button clicked");



        try{


            const response = await API.post(

                "/auth/login",

                {
                    email,
                    password,
                    role
                }

            );





            console.log(

                "LOGIN SUCCESS:",

                response.data

            );







            // Save Token

            localStorage.setItem(

                "token",

                response.data.token

            );







            // Save Role

            localStorage.setItem(

                "role",

                response.data.role

            );







            // Save User ID

            if(response.data.role === "Nurse"){


                localStorage.setItem(

                    "userId",

                    "nurse2"

                );


            }

            else{


                localStorage.setItem(

                    "userId",

                    response.data.userId

                );


            }









            // Redirect


            if(response.data.role==="Admin"){


                navigate("/admin-dashboard");


            }

            else if(response.data.role==="Doctor"){


                navigate("/doctor-dashboard");


            }

            else if(response.data.role==="Patient"){


                navigate("/patient-dashboard");


            }

            else if(response.data.role==="Nurse"){


                navigate("/nurse-dashboard");


            }

            else if(response.data.role==="Receptionist"){


                navigate("/receptionist-dashboard");


            }





        }



        catch(error){


            console.log(

                "LOGIN ERROR:",

                error.response

            );



            alert(

                JSON.stringify(

                    error.response?.data ||

                    error.message

                )

            );


        }


    };









    return(


        <div className="login-container">



            <div className="login-card">







                <h1>

                    🏥 AI Hospital Management System

                </h1>





                <p className="login-subtitle">

                    Smart Healthcare Management Platform

                </p>









                <h3>

                    Login As

                </h3>









                <div className="role-container">





                    <button

                        className={role==="Admin" ? "active-role" : ""}

                        onClick={()=>setRole("Admin")}

                    >

                        Admin

                    </button>





                    <button

                        className={role==="Doctor" ? "active-role" : ""}

                        onClick={()=>setRole("Doctor")}

                    >

                        Doctor

                    </button>





                    <button

                        className={role==="Patient" ? "active-role" : ""}

                        onClick={()=>setRole("Patient")}

                    >

                        Patient

                    </button>





                    <button

                        className={role==="Nurse" ? "active-role" : ""}

                        onClick={()=>setRole("Nurse")}

                    >

                        Nurse

                    </button>





                    <button

                        className={role==="Receptionist" ? "active-role" : ""}

                        onClick={()=>setRole("Receptionist")}

                    >

                        Receptionist

                    </button>





                </div>









                {

                    role &&

                    <p className="selected-role">

                        Selected Role: {role}

                    </p>

                }









                <input

                    type="email"

                    placeholder="Enter Email"

                    value={email}

                    onChange={(e)=>setEmail(e.target.value)}

                />









                <input

                    type="password"

                    placeholder="Enter Password"

                    value={password}

                    onChange={(e)=>setPassword(e.target.value)}

                />









                <button

                    className="login-btn"

                    onClick={handleLogin}

                >

                    Login

                </button>







            </div>



        </div>


    );


}



export default Login;