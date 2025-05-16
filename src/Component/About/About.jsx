import "./About.css"
import CV from "../../assets/svg/Oyewole Olufunmi.pdf"

const About = () => {
   const handleDownload = () => {
      const link = document.createElement('a');
      link.href = CV
      link.download = 'Oyewole Olufunmi.pdf'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   }

   return(
     <div className="about" id="about">
        <div className="left">
         <h1>About Me</h1>
         <button className="res" onClick={handleDownload}>Downoad My Resume</button>
        </div>
        <div className="right">
        <h4>My name is Oyewole R. Olufunmi</h4>
        <p>A versatile, hardworking individual; driven to meet and exceed a company’s expectations to deliver high-quality software products. Experienced in HTML, CSS, JavaScript, Typescript, and React. An effective listener that can communicate technical information in an easily understandable way. Offers a strong background in creative problem-solving and a proven ability to multi-task and prioritize in fast-paced, stressful environments.</p>        

        </div>
        
     </div>

   )

}
export default About