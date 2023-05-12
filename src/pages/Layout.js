import React, {useState,useEffect} from "react"
import { Outlet } from "react-router-dom"
import TopSec from "../components/TopSec"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"


const Layout = () => {
   const [spinnerVisible,setSpinnerVisible] = useState(true)
  
    // Spinner
    const spinner = function () {
        setTimeout(function () {
            setSpinnerVisible(false)
            /*if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }*/
        }, 1);
    }


    

   useEffect(() => {
     spinner()
   },[])



   

    return (
     <div>
       {spinnerVisible && (
        <>
        {/* Spinner Start */}
        <div id="preloader">
          <div id="status"></div>
        </div>
         {/* Spinner End */}
         </>
       )}
      {/* Navbar */}

      <TopSec/>
     

      <Outlet/>

      <Footer/>


    {/* Back to Top */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i
            className="bi bi-arrow-up"></i></a> 
      {/* end FOOTER */}

     </div>

     
    )
}

export default Layout