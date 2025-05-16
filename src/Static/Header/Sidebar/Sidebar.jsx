import { Link } from "react-router-dom";
import { useState } from "react";
import "./Sidebar.css"

const Sidebar = ({toggle, setToggle}) => {
    const navi = () => {
        setToggle (false)
    }

    const scrollToSection = (idPassed) => {
        const Section = document.getElementById(idPassed)
        Section?.scrollIntoView ({behavior: "smooth"})
        disappear("contain")
      }
        

        const disappear = (myId) => {
         const diss = document.getElementById(myId)
         diss.style.display = "none";
       }
    return(
        <div className="contain" id="contain">
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

    )
}

export default Sidebar 