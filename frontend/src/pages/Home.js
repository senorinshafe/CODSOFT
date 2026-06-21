import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="hero">
        <h1>Find Your Dream Job</h1>
        <p>Search and apply for jobs from top companies.</p>

        <Link to="/jobs">
          <button>Explore Jobs</button>
        </Link>
      </div>

      <div className="jobs">
        <h2>Featured Jobs</h2>

        <div className="job-container">
          <div className="job-card">
            <h3>Frontend Developer</h3>
            <p>Company: ABC Tech</p>
            <p>Location: Chennai</p>
          </div>

          <div className="job-card">
            <h3>Backend Developer</h3>
            <p>Company: XYZ Solutions</p>
            <p>Location: Bangalore</p>
          </div>

          <div className="job-card">
            <h3>UI/UX Designer</h3>
            <p>Company: Design Hub</p>
            <p>Location: Coimbatore</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;