import { useNavigate } from "react-router-dom";


function Logout(){


    const navigate = useNavigate();




    const handleLogout = ()=>{


        localStorage.removeItem("token");

        localStorage.removeItem("role");

        localStorage.removeItem("userId");



        navigate("/");


    };




    return(


        <button

            className="logout-btn"

            onClick={handleLogout}

        >

            Logout

        </button>


    );


}



export default Logout;