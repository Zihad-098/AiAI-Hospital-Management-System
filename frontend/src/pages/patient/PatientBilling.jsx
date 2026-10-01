import { useEffect, useState } from "react";
import API from "../../services/api";


function PatientBilling(){


    const [bills,setBills] = useState([]);





    // Load Billing Data

    const loadBills = async()=>{


        try{


            const response = await API.get(

                "/billing"

            );


            setBills(

                response.data

            );



        }


        catch(error){


            console.log(

                "Billing Error:",

                error

            );


        }


    };








    useEffect(()=>{


        loadBills();


    },[]);









    return(


        <div>


            <h1>

                💳 My Billing

            </h1>





            <h2>

                Payment History

            </h2>









            <table border="1">


                <thead>


                    <tr>


                        <th>
                            Consultation
                        </th>


                        <th>
                            Laboratory
                        </th>


                        <th>
                            Medicine
                        </th>


                        <th>
                            Room
                        </th>


                        <th>
                            Total Amount
                        </th>


                        <th>
                            Payment Status
                        </th>


                        <th>
                            Date
                        </th>


                    </tr>


                </thead>









                <tbody>


                {


                    bills.map((bill)=>(


                        <tr key={bill._id}>


                            <td>

                                {bill.consultationCharge}

                            </td>




                            <td>

                                {bill.laboratoryCharge}

                            </td>




                            <td>

                                {bill.medicineCharge}

                            </td>




                            <td>

                                {bill.roomCharge}

                            </td>




                            <td>

                                {bill.totalAmount}

                            </td>




                            <td>

                                {bill.paymentStatus}

                            </td>




                            <td>


                                {

                                new Date(

                                    bill.date

                                ).toLocaleDateString()

                                }


                            </td>




                        </tr>


                    ))

                }


                </tbody>



            </table>




        </div>


    );


}


export default PatientBilling;