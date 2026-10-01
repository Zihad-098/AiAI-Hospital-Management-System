import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";
import Logout from "../../components/Logout";


function AdminDashboard(){


    const navigate = useNavigate();



    return(


        <div className="admin-dashboard">



            {/* Logout Button */}

            <Logout />





            <h1>

                🏥 Admin Dashboard

            </h1>





            <h2>

                Welcome to AI Hospital Management System

            </h2>









            <div className="dashboard-grid">









                {/* Doctors */}


                <div

                    className="dashboard-card"

                    onClick={()=>navigate("/doctors")}

                >

                    <h3>

                        👨‍⚕️ Doctors

                    </h3>


                    <p>

                        Manage doctors information

                    </p>


                </div>









                {/* Patients */}


                <div

                    className="dashboard-card"

                    onClick={()=>navigate("/patients")}

                >

                    <h3>

                        🧑‍🤝‍🧑 Patients

                    </h3>


                    <p>

                        Manage patient records

                    </p>


                </div>









                {/* Appointments */}


                <div

                    className="dashboard-card"

                    onClick={()=>navigate("/appointments")}

                >

                    <h3>

                        📅 Appointments

                    </h3>


                    <p>

                        View and manage appointments

                    </p>


                </div>









                {/* Medical Records */}


                <div

                    className="dashboard-card"

                    onClick={()=>navigate("/medical-records")}

                >

                    <h3>

                        📝 Medical Records

                    </h3>


                    <p>

                        Manage patient medical history

                    </p>


                </div>









                {/* Rooms */}


                <div

                    className="dashboard-card"

                    onClick={()=>navigate("/rooms")}

                >

                    <h3>

                        🏥 Rooms

                    </h3>


                    <p>

                        Manage wards and cabins

                    </p>


                </div>









                {/* Pharmacy */}


                <div

                    className="dashboard-card"

                    onClick={()=>navigate("/pharmacy")}

                >

                    <h3>

                        💊 Pharmacy

                    </h3>


                    <p>

                        Manage medicine inventory

                    </p>


                </div>









                {/* Billing */}


                <div

                    className="dashboard-card"

                    onClick={()=>navigate("/billing")}

                >

                    <h3>

                        💳 Billing

                    </h3>


                    <p>

                        Manage patient payments

                    </p>


                </div>









                {/* Laboratory */}


                <div

                    className="dashboard-card"

                    onClick={()=>navigate("/laboratory")}

                >

                    <h3>

                        🔬 Laboratory

                    </h3>


                    <p>

                        Manage laboratory reports

                    </p>


                </div>









            </div>





        </div>


    );


}



export default AdminDashboard;