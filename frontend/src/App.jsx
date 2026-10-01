import { BrowserRouter, Routes, Route } from "react-router-dom";



import Login from "./pages/Login";



// Dashboards

import AdminDashboard from "./pages/dashboard/AdminDashboard";

import DoctorDashboard from "./pages/dashboard/DoctorDashboard";

import PatientDashboard from "./pages/dashboard/PatientDashboard";

import NurseDashboard from "./pages/dashboard/NurseDashboard";

import ReceptionistDashboard from "./pages/dashboard/ReceptionistDashboard";







// Admin Pages

import Doctors from "./pages/admin/Doctors";

import Patients from "./pages/admin/Patients";

import Appointments from "./pages/admin/Appointments";

import MedicalRecords from "./pages/admin/MedicalRecords";

import AdminBilling from "./pages/admin/AdminBilling";

import Rooms from "./pages/admin/Rooms";

import Pharmacy from "./pages/admin/Pharmacy";

import Laboratory from "./pages/admin/Laboratory";









// Doctor Pages

import DoctorPatients from "./pages/doctor/DoctorPatients";

import DoctorMedicalRecords from "./pages/doctor/DoctorMedicalRecords";

import DoctorAppointments from "./pages/doctor/DoctorAppointments";

import DoctorLaboratory from "./pages/doctor/DoctorLaboratory";









// Nurse Pages

import NursePatients from "./pages/nurse/NursePatients";

import NurseVitals from "./pages/nurse/NurseVitals";

import NurseMedications from "./pages/nurse/NurseMedications";

import NurseReports from "./pages/nurse/NurseReports";









// Patient Pages

import PatientAppointments from "./pages/patient/PatientAppointments";

import PatientMedicalHistory from "./pages/patient/PatientMedicalHistory";

import PatientMedicines from "./pages/patient/PatientMedicines";

import PatientBilling from "./pages/patient/PatientBilling";

import PatientLaboratory from "./pages/patient/PatientLaboratory";









function App(){


    return(


        <BrowserRouter>


            <Routes>







                {/* Login */}


                <Route

                    path="/"

                    element={<Login />}

                />









                {/* Dashboards */}



                <Route

                    path="/admin-dashboard"

                    element={<AdminDashboard />}

                />



                <Route

                    path="/doctor-dashboard"

                    element={<DoctorDashboard />}

                />



                <Route

                    path="/patient-dashboard"

                    element={<PatientDashboard />}

                />



                <Route

                    path="/nurse-dashboard"

                    element={<NurseDashboard />}

                />



                <Route

                    path="/receptionist-dashboard"

                    element={<ReceptionistDashboard />}

                />









                {/* Admin Routes */}



                <Route

                    path="/doctors"

                    element={<Doctors />}

                />



                <Route

                    path="/patients"

                    element={<Patients />}

                />



                <Route

                    path="/appointments"

                    element={<Appointments />}

                />



                <Route

                    path="/medical-records"

                    element={<MedicalRecords />}

                />



                <Route

                    path="/billing"

                    element={<AdminBilling />}

                />



                <Route

                    path="/rooms"

                    element={<Rooms />}

                />



                <Route

                    path="/pharmacy"

                    element={<Pharmacy />}

                />



                <Route

                    path="/laboratory"

                    element={<Laboratory />}

                />









                {/* Doctor Routes */}



                <Route

                    path="/doctor-patients"

                    element={<DoctorPatients />}

                />



                <Route

                    path="/doctor-medical-records"

                    element={<DoctorMedicalRecords />}

                />



                <Route

                    path="/doctor-appointments"

                    element={<DoctorAppointments />}

                />



                <Route

                    path="/doctor-laboratory"

                    element={<DoctorLaboratory />}

                />









                {/* Nurse Routes */}



                <Route

                    path="/nurse-patients"

                    element={<NursePatients />}

                />



                <Route

                    path="/nurse-vitals"

                    element={<NurseVitals />}

                />



                <Route

                    path="/nurse-medications"

                    element={<NurseMedications />}

                />



                <Route

                    path="/nurse-reports"

                    element={<NurseReports />}

                />









                {/* Patient Routes */}



                <Route

                    path="/patient-appointments"

                    element={<PatientAppointments />}

                />



                <Route

                    path="/patient-medical-history"

                    element={<PatientMedicalHistory />}

                />



                <Route

                    path="/patient-medicines"

                    element={<PatientMedicines />}

                />



                <Route

                    path="/patient-billing"

                    element={<PatientBilling />}

                />



                <Route

                    path="/patient-laboratory"

                    element={<PatientLaboratory />}

                />







            </Routes>


        </BrowserRouter>


    );


}



export default App;