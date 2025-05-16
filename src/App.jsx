import Header from "./Static/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Static/Footer/Footer";
// import Pages from "./Pages/Pages.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = ()=> {
   return(
      <>
      <BrowserRouter>
         <Header/>
         <Routes>
         <Route path = "/" element = {<Home/>}/>
         {/* <Route path = "/"/> */}
         </Routes>
         <Footer/>



         </BrowserRouter>
      
      </>

   )


}


export default App