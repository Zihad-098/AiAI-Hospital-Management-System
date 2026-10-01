import "./DoctorDashboard.css";
import { useNavigate } from "react-router-dom";
import Logout from "../../components/Logout";

function DoctorDashboard() {


    const navigate = useNavigate();



    return (

        <div className="doctor-dashboard">

            <Logout />





            <h1>
                🩺 Doctor Dashboard
            </h1>





            <h2>
                Welcome to AI Hospital Management System
            </h2>









            <div className="dashboard-grid">









                {/* Patients */}


                <div

                    className="dashboard-card"

                    onClick={() => navigate("/doctor-patients")}

                >

                    <h3>
                        🧑‍🤝‍🧑 Patients
                    </h3>


                    <p>
                        View patient history
                    </p>


                </div>









                {/* Appointments */}


                <div

                    className="dashboard-card"

                    onClick={() => navigate("/doctor-appointments")}

                >

                    <h3>
                        📅 Appointments
                    </h3>


                    <p>
                        Manage appointments
                    </p>


                </div>









                {/* Medical Records */}


                <div

                    className="dashboard-card"

                    onClick={() => navigate("/doctor-medical-records")}

                >

                    <h3>
                        📋 Medical Records
                    </h3>


                    <p>
                        Add diagnosis and prescriptions
                    </p>


                </div>









                {/* Laboratory */}


                <div

                    className="dashboard-card"

                    onClick={() => navigate("/doctor-laboratory")}

                >

                    <h3>
                        🧪 Laboratory
                    </h3>


                    <p>
                        Request and view test reports
                    </p>


                </div>









            </div>





        </div>


    );


}


export default DoctorDashboard;