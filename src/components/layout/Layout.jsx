import { Outlet } from "react-router-dom";

import { Helmet } from "react-helmet";
import Nav from "../nav/Nav";


const Layouts = () => {


  return (
    <>
        <Helmet>
            <meta charSet="utf-8"/>
            <title> Assignment</title>
        </Helmet>

  <Nav/>
   

 <Outlet/>

 
    
    </>
  )
}

export default Layouts