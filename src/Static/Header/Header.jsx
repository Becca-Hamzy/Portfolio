import "./Header.css"
import { IoReorderTwoOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";


const Header = () =>{
  const [toggle, setToggle ] = useState (false)
    const touchToggle = ()=> {
       setToggle (!toggle);

    }

    const scrollToSection = (idPassed) => {
      const Section = document.getElementById(idPassed)
      Section?.scrollIntoView ({behavior: "smooth"})

    }
  return(
     <div className="container">
        <div className="name">
            <h3>Oyewole R. Olufunmi</h3>
        </div>
        <div className="nav">
          <Link to = "#">
             Home
          </Link>
          <Link to = "#" onClick={()=> {scrollToSection("about")}}>
             About
          </Link>
          <Link to = "#" onClick={() => { scrollToSection("project")}} >
             Project
          </Link>
          <Link to = "#" onClick = {() => { scrollToSection("contact")}}>
             Contact
          </Link>
          

        </div>
          <div className="sideNav" onClick = {touchToggle}>
          <IoReorderTwoOutline  size={50}/>

          </div>

          {toggle === false? null : <Sidebar toggle = {toggle} setToggle={setToggle}/> }

     </div>
     

  )

}
export default Header

