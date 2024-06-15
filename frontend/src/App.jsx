import { Route, Routes, Link, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar"; 
import Home from "./pages/Home"
import CourseList from "./pages/CourseList";
import Footer from '../src/components/Footer/Footer'
function App() {
  return (
    <div>
     
     <Navbar />
     <Home />
    <CourseList/>
    <Footer/>
     
     
   

   </div>
  );
}

export default App;
