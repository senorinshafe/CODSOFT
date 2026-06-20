import { Link } from "react-router-dom";

function Jobs() {
  return (
    <div className="jobs">
      <h1>Available Jobs</h1>

      <div className="job-container">
        <div className="job-card">
          <h3>Frontend Developer</h3>
          <p>Company: ABC Tech</p>
          <p>Location: Chennai</p>

          <Link to="/apply">
            <button>Apply Now</button>
          </Link>
        </div>

        <div className="job-card">
          <h3>Backend Developer</h3>
          <p>Company: XYZ Solutions</p>
          <p>Location: Bangalore</p>

          <Link to="/apply">
            <button>Apply Now</button>
          </Link>
        </div>

        <div className="job-card">
          <h3>Full Stack Developer</h3>
          <p>Company: Tech Hub</p>
          <p>Location: Hyderabad</p>

          <Link to="/apply">
            <button>Apply Now</button>
          </Link>
        </div>

        <div className="job-card">
          <h3>UI/UX Designer</h3>
          <p>Company: Design Hub</p>
          <p>Location: Coimbatore</p>

          <Link to="/apply">
            <button>Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Jobs;