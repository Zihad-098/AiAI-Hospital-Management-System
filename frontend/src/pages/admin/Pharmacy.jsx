import { useEffect, useState } from "react";
import API from "../../services/api";


function Pharmacy(){


    const [medicines,setMedicines] = useState([]);


    const [editId,setEditId] = useState(null);





    const [form,setForm] = useState({

        name:"",

        category:"",

        price:"",

        quantity:"",

        expiryDate:""

    });









    // Load Medicines

    const loadMedicines = async()=>{


        try{


            const response = await API.get(

                "/medicines"

            );


            setMedicines(

                response.data

            );


        }


        catch(error){


            console.log(error);


        }


    };








    useEffect(()=>{


        loadMedicines();


    },[]);









    // Input Change

    const handleChange=(e)=>{


        setForm({

            ...form,

            [e.target.name]:e.target.value

        });


    };









    // Add / Update Medicine

    const saveMedicine = async()=>{


        try{


            if(editId){


                await API.put(

                    `/medicines/${editId}`,

                    form

                );


                alert(

                    "Medicine Updated Successfully"

                );


            }


            else{


                await API.post(

                    "/medicines",

                    form

                );


                alert(

                    "Medicine Added Successfully"

                );


            }





            setForm({

                name:"",

                category:"",

                price:"",

                quantity:"",

                expiryDate:""

            });



            setEditId(null);



            loadMedicines();



        }


        catch(error){


            console.log(error);


            alert(

                "Operation Failed"

            );


        }


    };









    // Edit Medicine

    const editMedicine=(medicine)=>{


        setForm({

            name:medicine.name,

            category:medicine.category,

            price:medicine.price,

            quantity:medicine.quantity,

            expiryDate:

            medicine.expiryDate

            ?

            medicine.expiryDate.substring(0,10)

            :

            ""

        });



        setEditId(

            medicine._id

        );


    };









    // Delete Medicine

    const deleteMedicine = async(id)=>{


        try{


            await API.delete(

                `/medicines/${id}`

            );



            alert(

                "Medicine Deleted"

            );



            loadMedicines();



        }


        catch(error){


            console.log(error);


        }


    };









    return(


        <div>


            <h1>

                💊 Pharmacy Management

            </h1>





            <h2>

                {

                editId

                ?

                "Update Medicine"

                :

                "Add Medicine"

                }

            </h2>









            <input

                name="name"

                placeholder="Medicine Name"

                value={form.name}

                onChange={handleChange}

            />









            <input

                name="category"

                placeholder="Category"

                value={form.category}

                onChange={handleChange}

            />









            <input

                name="price"

                placeholder="Price"

                value={form.price}

                onChange={handleChange}

            />









            <input

                name="quantity"

                placeholder="Quantity"

                value={form.quantity}

                onChange={handleChange}

            />









            <input

                type="date"

                name="expiryDate"

                value={form.expiryDate}

                onChange={handleChange}

            />









            <button onClick={saveMedicine}>


                {

                editId

                ?

                "Update Medicine"

                :

                "Add Medicine"

                }


            </button>









            <h2>

                Medicine Inventory

            </h2>









            <table border="1">


                <thead>


                    <tr>


                        <th>
                            Name
                        </th>


                        <th>
                            Category
                        </th>


                        <th>
                            Price
                        </th>


                        <th>
                            Quantity
                        </th>


                        <th>
                            Expiry Date
                        </th>


                        <th>
                            Action
                        </th>


                    </tr>


                </thead>








                <tbody>


                {


                    medicines.map((medicine)=>(


                        <tr key={medicine._id}>


                            <td>

                                {medicine.name}

                            </td>



                            <td>

                                {medicine.category}

                            </td>



                            <td>

                                {medicine.price}

                            </td>



                            <td>

                                {medicine.quantity}

                            </td>



                            <td>

                                {

                                medicine.expiryDate

                                ?

                                new Date(

                                    medicine.expiryDate

                                ).toLocaleDateString()

                                :

                                ""

                                }

                            </td>



                            <td>


                                <button

                                onClick={()=>editMedicine(medicine)}

                                >

                                    Edit

                                </button>





                                <button

                                onClick={()=>deleteMedicine(medicine._id)}

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


export default Pharmacy;