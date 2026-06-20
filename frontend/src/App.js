import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ApplyJob from "./pages/ApplyJob";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2>Job Board</h2>

        <div>
          <Link
            to="/"
            style={{
              marginRight: "20px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Home
          </Link>

          <Link
            to="/jobs"
            style={{
              marginRight: "20px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Jobs
          </Link>

          <Link
            to="/login"
            style={{
              marginRight: "20px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Login
          </Link>

          <Link
            to="/register"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Register
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/apply" element={<ApplyJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;