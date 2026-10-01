import "./PatientDashboard.css";
import { useNavigate } from "react-router-dom";
import Logout from "../../components/Logout";


function PatientDashboard() {


    const navigate = useNavigate();



    return (


        <div className="patient-dashboard">

            <Logout />






            <h1>
                🧑‍🤝‍🧑 Patient Dashboard
            </h1>






            <h2>
                Welcome to AI Hospital Management System
            </h2>









            <div className="dashboard-grid">







                {/* Appointments */}


                <div

                    className="dashboard-card"

                    onClick={() => navigate("/patient-appointments")}

                >

                    <h3>
                        📅 Appointments
                    </h3>


                    <p>
                        Book and view appointments
                    </p>


                </div>









                {/* Medical Records */}


                <div

                    className="dashboard-card"

                    onClick={() => navigate("/patient-medical-history")}

                >

                    <h3>
                        📋 Medical Records
                    </h3>


                    <p>
                        View diagnosis and prescriptions
                    </p>


                </div>









                {/* Medicines */}


                <div

                    className="dashboard-card"

                    onClick={() => navigate("/patient-medicines")}

                >

                    <h3>
                        💊 Medicines
                    </h3>


                    <p>
                        View prescribed medicines
                    </p>


                </div>









                {/* Billing */}


                <div

                    className="dashboard-card"

                    onClick={() => navigate("/patient-billing")}

                >

                    <h3>
                        💳 Billing
                    </h3>


                    <p>
                        View payment details
                    </p>


                </div>









                {/* Laboratory Reports */}


                <div

                    className="dashboard-card"

                    onClick={() => navigate("/patient-laboratory")}

                >

                    <h3>
                        🧪 Laboratory Reports
                    </h3>


                    <p>
                        View test results
                    </p>


                </div>









            </div>





        </div>


    );


}


export default PatientDashboard;