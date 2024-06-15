import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Temp from "./pages/Temp";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/temp">Temp</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temp" element={<Temp />} />
      </Routes>
    </>
  );
}

export default App;
