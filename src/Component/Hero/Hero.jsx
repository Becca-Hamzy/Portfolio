  import "./Hero.css"
  import pic from "../../assets/svg/becca..png"
  import CV from "../../assets/svg/Oyewole Olufunmi.pdf"
  

  const Hero = () => {

   const handleDownload = () => {
      const link = document.createElement('a');
      link.href = CV
      link.download = 'Oyewole Olufunmi.pdf'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };
     return (
        <div className="me">
        <div  className="text">
        <h4>Hi there!</h4>
         <h2>I am a Front-end Developer </h2> 
         <p>I make the complex simple</p>
         <button className="resume" onClick={handleDownload}>Download my resume</button>
        </div>
        <div className="img">
         <img src= {pic} alt="" />
        </div>
        </div>


     )

  }

  export default Hero