import { Link } from "react-router-dom";
import { useState } from "react";

function Jobs() {
  const [search, setSearch] = useState("");

  const jobs = [
    {
      title: "Software Engineer",
      company: "Infosys",
      location: "Chennai",
      salary: "₹6 - ₹8 LPA",
      experience: "0-2 Years",
    },
    {
      title: "Frontend Developer",
      company: "TCS",
      location: "Bangalore",
      salary: "₹5 - ₹7 LPA",
      experience: "1-3 Years",
    },
    {
      title: "Backend Developer",
      company: "Wipro",
      location: "Hyderabad",
      salary: "₹7 - ₹10 LPA",
      experience: "2-4 Years",
    },
    {
      title: "Full Stack Developer",
      company: "Accenture",
      location: "Pune",
      salary: "₹8 - ₹12 LPA",
      experience: "2-5 Years",
    },
    {
      title: "Data Analyst",
      company: "Cognizant",
      location: "Chennai",
      salary: "₹5 - ₹8 LPA",
      experience: "0-2 Years",
    },
    {
      title: "UI/UX Designer",
      company: "Zoho",
      location: "Chennai",
      salary: "₹6 - ₹9 LPA",
      experience: "1-3 Years",
    },
    {
      title: "DevOps Engineer",
      company: "HCL",
      location: "Noida",
      salary: "₹8 - ₹12 LPA",
      experience: "2-5 Years",
    },
    {
      title: "Java Developer",
      company: "IBM",
      location: "Bangalore",
      salary: "₹7 - ₹10 LPA",
      experience: "1-4 Years",
    },
    {
      title: "React Developer",
      company: "Capgemini",
      location: "Chennai",
      salary: "₹6 - ₹9 LPA",
      experience: "1-3 Years",
    },
    {
      title: "Python Developer",
      company: "Deloitte",
      location: "Hyderabad",
      salary: "₹7 - ₹11 LPA",
      experience: "1-4 Years",
    },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="jobs">
      <h1>Available Jobs</h1>

      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <div className="job-container">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div className="job-card" key={index}>
              <h3>{job.title}</h3>
              <p>Company: {job.company}</p>
              <p>Location: {job.location}</p>
              <p>Salary: {job.salary}</p>
              <p>Experience: {job.experience}</p>

              <Link to="/apply">
                <button>Apply Now</button>
              </Link>
            </div>
          ))
        ) : (
          <h2>No jobs found</h2>
        )}
      </div>
    </div>
  );
}

export default Jobs;