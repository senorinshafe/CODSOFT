import { useState } from "react";

function EmployerDashboard() {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");

  const handleAddJob = () => {
    alert("Job Posted Successfully!");
    setJobTitle("");
    setCompany("");
  };

  return (
    <div className="jobs">
      <h1>Employer Dashboard</h1>

      <div
        className="job-card"
        style={{ width: "500px", margin: "auto" }}
      >
        <h3>Post a New Job</h3>

        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <button onClick={handleAddJob}>
          Post Job
        </button>
      </div>
    </div>
  );
}

export default EmployerDashboard;