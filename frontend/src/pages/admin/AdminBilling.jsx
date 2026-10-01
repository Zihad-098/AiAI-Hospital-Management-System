import { useEffect, useState } from "react";
import API from "../../services/api";
import "./AdminBilling.css";


function AdminBilling(){


    const [patients,setPatients] = useState([]);

    const [bills,setBills] = useState([]);




    const [form,setForm] = useState({

        patient:"",

        consultationCharge:"",

        laboratoryCharge:"",

        medicineCharge:"",

        roomCharge:"",

        totalAmount:"",

        paymentStatus:"Pending"

    });







    // Load Patients and Bills

    const loadData = async()=>{


        try{


            const patientResponse = await API.get(
                "/patients"
            );


            const billResponse = await API.get(
                "/billing"
            );



            setPatients(
                patientResponse.data
            );


            setBills(
                billResponse.data
            );



        }


        catch(error){


            console.log(
                "Billing Load Error:",
                error
            );


        }


    };







    useEffect(()=>{


        loadData();


    },[]);









    // Handle Input Change

    const handleChange=(e)=>{


        const updatedForm={


            ...form,


            [e.target.name]:e.target.value


        };




        updatedForm.totalAmount =


            Number(updatedForm.consultationCharge || 0) +

            Number(updatedForm.laboratoryCharge || 0) +

            Number(updatedForm.medicineCharge || 0) +

            Number(updatedForm.roomCharge || 0);





        setForm(updatedForm);



    };









    // Create Bill

    const createBill = async()=>{


        try{


            await API.post(

                "/billing",

                form

            );



            alert(

                "Bill Created Successfully"

            );




            setForm({

                patient:"",

                consultationCharge:"",

                laboratoryCharge:"",

                medicineCharge:"",

                roomCharge:"",

                totalAmount:"",

                paymentStatus:"Pending"

            });




            loadData();



        }


        catch(error){


            console.log(

                error.response

            );


            alert(

                error.response?.data?.message ||

                "Bill Creation Failed"

            );


        }


    };









    // Delete Bill

    const deleteBill = async(id)=>{


        try{


            await API.delete(

                `/billing/${id}`

            );


            alert(

                "Bill Deleted"

            );


            loadData();



        }


        catch(error){


            console.log(error);


        }


    };









    return(


        <div className="admin-billing">





            <h1>
                💳 Billing Management
            </h1>





            <h2>
                Create Bill
            </h2>








            <div className="billing-form">





                <select

                    name="patient"

                    value={form.patient}

                    onChange={handleChange}

                >


                    <option value="">

                        Select Patient

                    </option>




                    {

                        patients.map((patient)=>(


                            <option

                                key={patient._id}

                                value={patient._id}

                            >

                                {patient.name}

                            </option>


                        ))

                    }



                </select>









                <input

                    name="consultationCharge"

                    placeholder="Consultation Charge"

                    value={form.consultationCharge}

                    onChange={handleChange}

                />








                <input

                    name="laboratoryCharge"

                    placeholder="Laboratory Charge"

                    value={form.laboratoryCharge}

                    onChange={handleChange}

                />








                <input

                    name="medicineCharge"

                    placeholder="Medicine Charge"

                    value={form.medicineCharge}

                    onChange={handleChange}

                />








                <input

                    name="roomCharge"

                    placeholder="Room Charge"

                    value={form.roomCharge}

                    onChange={handleChange}

                />








                <input

                    className="total-input"

                    placeholder="Total Amount"

                    value={form.totalAmount}

                    readOnly

                />








                <select

                    name="paymentStatus"

                    value={form.paymentStatus}

                    onChange={handleChange}

                >


                    <option value="Pending">

                        Pending

                    </option>



                    <option value="Paid">

                        Paid

                    </option>



                </select>








                <button

                    className="billing-button"

                    onClick={createBill}

                >

                    Create Bill

                </button>





            </div>









            <h2>
                Bill List
            </h2>









            <table

                className="billing-table"

                border="1"

            >


                <thead>


                    <tr>


                        <th>
                            Patient
                        </th>


                        <th>
                            Total Amount
                        </th>


                        <th>
                            Payment Status
                        </th>


                        <th>
                            Action
                        </th>


                    </tr>


                </thead>









                <tbody>


                {


                    bills.map((bill)=>(


                        <tr key={bill._id}>


                            <td>

                                {

                                bill.patient?.name ||

                                "Unknown"

                                }

                            </td>





                            <td>

                                {bill.totalAmount}

                            </td>





                            <td>

                                {bill.paymentStatus}

                            </td>





                            <td>


                                <button

                                onClick={()=>deleteBill(bill._id)}

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



export default AdminBilling;