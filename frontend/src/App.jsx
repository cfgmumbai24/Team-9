import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Temp from "./pages/Temp";
import Courses from "./pages/Courses";
import { EdgeStoreProvider } from "./utils/edgestore";
import QuestionsList from "./pages/Questionnaire";
import Course from "./pages/Course";
import MentorDashboard from "./component/Mentor/mentor";
import UserForm from "./pages/Auth";
import { UserContext, UserProvider } from "./context/UserContext";
import { useContext, useEffect, useState } from "react";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <EdgeStoreProvider basePath="http://localhost:3000/edgestore">
        <UserProvider>
          {/* Rest of your app */}

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/temp" element={<Temp />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/questions" element={<QuestionsList />} />
            <Route path="/courses/:id" element={<Course />} />

            <Route path="/mentor" elemen={<MentorDashboard />} />
            <Route path="/auth" element={<UserForm />}></Route>

            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </UserProvider>
      </EdgeStoreProvider>
    </>
  );
}

const Navbar = () => {
  const userctx = useContext(UserContext);
  const { userId } = userctx;
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);

  return (
    <nav className="bg-blue-700 text-white font-semibold py-3 px-6">
      <ul className="flex items-center gap-x-3">
        <span className="text-xl flex-1">
          <Link to="/">Eklavya Portal</Link>
        </span>
        <div className="flex items-center gap-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/temp">Temp</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          {!user?.answers?.length ? (
            <li>
              <Link to="/questions">Questionnaire</Link>
            </li>
          ) : null}
          {userId ? (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          ) : (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default App;
