
 


import "./Project.css"
const Project = ({ img, Text, btn, btn2, link1, link2}) => {
   return (
       
    <>
        {/* <div className="protext">
        </div> */}
        <div className="proimg" id="project">
            <img src= {img} alt="" />
            <p>{Text}</p>
            <a target="_blank" href={link1}><button>{btn}</button></a> 
            <a target="_blank" href={link2}><button>{btn2}</button></a>




        </div>
    
    
    
    </>
    //   <div className="protext">
    //      <h1>HANDS-ON PROJECT</h1>
    //      <div className= "project">
    //      <div className="proimg"> <img src= {img} alt="" />
    //         <div className="text"> <p>{Text}  </p> 

    //         </div>
    //       <a href="https://becca-hamzy.github.io/Dessert/" ><img src= {dessert} alt="" /></a>
    //       <p>Cloned a fully mobile-responsive application from Frontend-mentor that enables users to order a variety of foods, using HTML, CSS, and JavaScript for functionality.</p> <br />Date: Sept, 2024. <br />
    //       <button>Source Code</button>
    //        <button>Demo</button></div>
    //        <div className="proimg"><a href="https://becca-hamzy.github.io/Furniture/"><img src= {Furniro} alt="" /></a> 
    //        <p>This was my first milestone project, created using HTML and CSS based on a Figma design. It’s a webpage displaying a variety of furniture products for sale. <br /> Date: August,2024.</p> <br />
    //        <button>Source Code</button>
    //        <button>Demo</button></div>
    //        <div className="proimg"><a href="https://becca-hamzy.github.io/Nike/"><img src= {Nike} alt="" /></a> <p>I built a Nike webpage using HTML and CSS as part of an early-stage hands-on project to test and strengthen my knowledge of HTML and CSS. </p> <br /> Date: August, 2024. <br />
    //        <button>Source Code</button>
    //        <button>Demo</button></div>

    //        <div className="proimg"><a href="https://becca-hamzy.github.io/Country-Flags/"><img src= {Worldflag} alt="" /></a> <p>I retrieved data from an API to display detailed information about countries and regions around the world. The site dynamically presents key details for each country, including population, currency, and capital, offering users an interactive and informative experience of global data. <br /> Date: October, 2024.</p> <br />
    //        <button>Source Code</button>
    //        <button>Demo</button></div>

    //        <div className="proimg"><a href="https://becca-hamzy.github.io/Look-Good-Cosmetics/"><img src= {Lookgood} alt="" /></a>
    //        <p>I designed an application for ordering cosmetics using HTML, CSS, and JavaScript for functionality. The app is designed to simplify the process of purchasing cosmetics for women and perfumes for men.</p> <br />Date: Sept,2024. <br />
    //        <button>Source Code</button>
    //        <button>Demo</button></div>

    //        <div className="proimg"><a href="https://kuda-clone-six.vercel.app/"><img src= {Kuda} alt="" /></a> <p>I built a replica of the Kuda website, concentrating on routing and styling using styled-components. This project allowed me to gain practical experience in creating seamless navigation flows and ensuring a consistent, responsive design through the integration of styled-components.</p> <br /> Date: November, 2024 <br />
    //        <button>Source Code</button>
    //        <button>Demo</button> </div>
    //   </div>
        
    //    <div>
         

    //    </div>
      
    //   </div>

   )

}
export default Project