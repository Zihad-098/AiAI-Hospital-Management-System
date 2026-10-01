import "./NurseDashboard.css";
import { useNavigate } from "react-router-dom";
import Logout from "../../components/Logout";


function NurseDashboard(){


    const navigate = useNavigate();



    return(


        <div className="nurse-dashboard">



            {/* Logout Button */}

            <Logout />





            <h1>

                👩‍⚕️ Nurse Dashboard

            </h1>





            <h2>

                Welcome to AI Hospital Management System

            </h2>









            <div className="dashboard-grid">









                {/* Assigned Patients */}


                <div

                    className="dashboard-card"

                    onClick={()=>navigate("/nurse-patients")}

                >

                    <h3>

                        🧑‍🤝‍🧑 Assigned Patients

                    </h3>


                    <p>

                        View assigned patient information

                    </p>


                </div>









                {/* Vital Signs */}


                <div

                    className="dashboard-card"

                    onClick={()=>navigate("/nurse-vitals")}

                >

                    <h3>

                        ❤️ Vital Signs

                    </h3>


                    <p>

                        Monitor patient health status

                    </p>


                </div>









                {/* Medication Schedule */}


                <div

                    className="dashboard-card"

                    onClick={()=>navigate("/nurse-medications")}

                >

                    <h3>

                        💊 Medication Schedule

                    </h3>


                    <p>

                        Manage medicine schedules

                    </p>


                </div>









                {/* Nursing Reports */}


                <div

                    className="dashboard-card"

                    onClick={()=>navigate("/nurse-reports")}

                >

                    <h3>

                        📋 Nursing Reports

                    </h3>


                    <p>

                        Update patient care reports

                    </p>


                </div>









            </div>





        </div>


    );


}


export default NurseDashboard;