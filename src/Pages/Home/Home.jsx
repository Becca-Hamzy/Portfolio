import Hero from "../../Component/Hero/Hero.jsx"
import Capability from "../../Component/Capability/Capability.jsx";
import Experience from "../../Component/Experience/Experience.jsx";
import Contact from "../../Component/Contact/Contact.jsx";
import Project from "../../Component/Project/Project.jsx";
import dessert from "../../assets/svg/dessert.jpeg"
import Furniro from "../../assets/svg/Furniro.jpeg"
import Worldflag from "../../assets/svg/worldflag.jpeg"
import Lookgood from "../../assets/svg/lookgood.jpeg"
import Kuda from "../../assets/svg/Kudaclone.jpeg"
import Nike from "../../assets/svg/nike.jpeg"
import "../../Component/Project/Project.css"
import About from "../../Component/About/About.jsx"
import "./Home.css"
// import Footer from "../../Static/Footer/Footer.jsx";
function Home() {
    return(
     <>
       <Hero/>
       <About/>
       <Capability/>
       <Experience/>
       <div className="Card">
       <h1>SOME OF MY HANDS-ON PROJECT</h1>

       <div className="pro">
       <Project className= "card1" img={Furniro} alt = "" Text= "This was my first milestone project, created using HTML and CSS based on a Figma design. It’s a webpage displaying a variety of furniture products for sale. "
       btn = {"Source Code"} btn2={"Demo"} link1={"https://github.com/Becca-Hamzy/Furniture.git"}  link2={"https://becca-hamzy.github.io/Furniture/"}/>

      <Project className= "card1" img={Nike} alt = "" Text= "Built a Nike webpage using HTML and CSS as part of an early-stage hands-on project to test, strengthen, and demonstrate my foundational web development skills."
       btn = {"Source Code"} btn2={"Demo"} link1={"https://github.com/Becca-Hamzy/Nike.git"}  link2={"https://becca-hamzy.github.io/Nike/"}/>

       <Project className= "card1" img={Lookgood} alt = "" Text= "Designed an e-commerce app for ordering cosmetics and perfumes using HTML, CSS, and JavaScript, streamlining the shopping experience for men and women."
       btn = {"Source Code"} btn2={"Demo"} link1={"https://github.com/Becca-Hamzy/Look-Good-Cosmetics.git"}  link2={"https://becca-hamzy.github.io/Look-Good-Cosmetics/"}/>

       <Project className= "card1" img={dessert} alt = "" Text= "Cloned a fully mobile-responsive application from Frontend-mentor that enables users to order a variety of foods, using HTML, CSS, and JavaScript for functionality."
       btn = {"Source Code"} btn2={"Demo"} link1={"https://github.com/Becca-Hamzy/Dessert.git"}  link2={"https://becca-hamzy.github.io/Dessert/"}/>

      <Project className= "card1" img={Worldflag} alt = "" Text= "Fetched and displayed dynamic country data from an API, showing key details like population, currency, and capital for an interactive global overview."
       btn = {"Source Code"} btn2={"Demo"} link1={"https://github.com/Becca-Hamzy/Country-Flags.git"}  link2={"https://becca-hamzy.github.io/Country-Flags/"}/>

       <Project className= "card1" img={Kuda} alt = "" Text= "Cloned the Kuda website with a strong focus on routing, responsive design, and UI consistency using styled-components for seamless styling and smooth navigation."
       btn =  {"Source Code"} btn2={ "Demo"} link1={"https://github.com/Becca-Hamzy/Kuda-clone.git"} link2={"https://kuda-clone-six.vercel.app/"}/>
       </div>

       </div>

       <Contact/>
       {/* <Footer/> */}


     
     </>


    )
}

export default Home