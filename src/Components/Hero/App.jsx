import Footer from "../Footer/Footer"
import { useState } from "react"
import ProductPage from "../Products/ProductPage";
// import AboutAs from "../AboutAs.jsx/AboutAs";
import About from "../AboutAs.jsx/About";
import Testimonial from "../AboutAs.jsx/Testimonial";
import Navi from "../Header/Navi";
import LandingPage from "./LandingPage";
import Login from "../Login/Login";
// import FullProduct from "./Components/Products/FullProduct";

function App() {
  

  return (
    <>
      <Navi/>
      {/* <Login/> */}
      <LandingPage/>
      {/* <ProductPage /> */}
      <div className=" h-[200vw]">

      </div>
      {/* <AboutAs/> */}
      {/* <About/> */}
      {/* <Testimonial/> */}
      <Footer  />
    </>
  )
}

export default App
