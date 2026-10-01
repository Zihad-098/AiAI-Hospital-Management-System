import "./ReceptionistDashboard.css";
import Logout from "../../components/Logout";


function ReceptionistDashboard() {

    return (

        <div className="receptionist-dashboard">

            <Logout />


            <h1>
                🧑‍💼 Receptionist Dashboard
            </h1>


            <h2>
                Welcome to AI Hospital Management System
            </h2>



            <div className="dashboard-grid">



                <div className="dashboard-card">

                    <h3>
                        🧾 Patient Registration
                    </h3>

                    <p>
                        Register new patients
                    </p>

                </div>





                <div className="dashboard-card">

                    <h3>
                        📅 Appointments
                    </h3>

                    <p>
                        Manage patient appointments
                    </p>

                </div>





                <div className="dashboard-card">

                    <h3>
                        🏥 Admission Records
                    </h3>

                    <p>
                        Manage admission information
                    </p>

                </div>





                <div className="dashboard-card">

                    <h3>
                        💳 Billing Support
                    </h3>

                    <p>
                        Assist with billing information
                    </p>

                </div>



            </div>


        </div>

    );

}


export default ReceptionistDashboard;