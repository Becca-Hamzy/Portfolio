import "./Contact.css"
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { SiGmail } from "react-icons/si";



const Contact = () =>{
   return(
      <div className="con" id="contact">
         <div className="conta" id="contact">
             <h1>
                LET'S CONNECT
             </h1>
             <p> I am ready to turn imaginations to reality. </p>

              <p>Say hello at oyewoleolufunmi@gmail.com</p>
              <a href="https://www.linkedin.com/in/oyewole-olufunmi" target="_blank"><IoLogoLinkedin  size={30}  color="blue"/> </a>
              <a href="https://github.com/Becca-Hamzy/Becca-Hamzy" target="_blank"><IoLogoGithub size={30} color="blue"/> </a>
              <a href="mailto:oyewoleolufunmi@gmail.com"target="_blank"><SiGmail size={30} color="blue" /></a>
         </div>

             <div  className="content">

                    <form action="">
                      <input type="text" placeholder="Name"/> <br /> <br />
                      <input type="text" placeholder="Email"/> <br />  <br />
                      <input type="text" placeholder="Subject"/> <br /> <br />
                      <textarea name="" id="">Message</textarea> <br /> <br />
                      <button className="sub">Submit</button>

                       


                    </form>



        </div>
          
      </div>

   )


}


export default Contact