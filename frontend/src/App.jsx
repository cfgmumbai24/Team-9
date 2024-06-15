import { Route, Routes, Link, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar"; 
// import Home from "./pages/Home"
import CourseList from "./pages/CourseList";
import Footer from '../src/components/Footer/Footer'
import Banner from "./components/Banner";
import HeroSection from "./components/HeroSection";
function App() {
  return (
    <div>
     
     <Navbar />
   
     <HeroSection/>
    <CourseList/>
    <Banner/>
    <Footer/>
     
     
   

   </div>
  );
}

export default App;
