import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ApplyJob from "./pages/ApplyJob";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import "./App.css";
import CandidateDashboard from "./pages/CandidateDashboard";
import EmployerDashboard from "./pages/EmployerDashboard";
function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link
          to="/"
          style={{
            color:"#FFF8E7",
            textDecoration: "none",
          }}
        >

          <h2>Plum Careers</h2>
        </Link>

        <div>
        

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
          <Link
            to="/candidate"
            style={{
              marginLeft: "20px",
              color: "white",
              textDecoration: "none",
            }} 
          >
            Dashboard
          </Link>
          <Link
            to="/employer"
            style={{
              marginLeft: "20px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Employer
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/apply" element={<ApplyJob />} />
        <Route path="/jobdetails" element={<JobDetails />} />
        <Route
          path="/candidate"
          element={<CandidateDashboard />}
        />
        <Route
          path="/employer"
          element={<EmployerDashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;