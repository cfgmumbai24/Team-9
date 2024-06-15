import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Temp from "./pages/Temp";
import Courses from "./pages/Courses";
import Auth from "./pages/Auth";

function App() {
  return (
    <>
      <nav className="">
        <ul className="flex items-center gap-x-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/temp">Temp</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temp" element={<Temp />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
