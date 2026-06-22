function JobDetails() {
  return (
    <div className="jobs">
      <div className="job-card" style={{ width: "700px", margin: "auto" }}>
        <h1>Frontend Developer</h1>

        <p><strong>Company:</strong> Infosys</p>
        <p><strong>Location:</strong> Chennai</p>
        <p><strong>Salary:</strong> ₹6 - ₹8 LPA</p>
        <p><strong>Experience:</strong> 0-2 Years</p>

        <h3>Skills Required</h3>
        <ul style={{ textAlign: "left" }}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
        </ul>

        <h3>Job Description</h3>

        <p>
          We are looking for a Frontend Developer who can build
          responsive web applications using React and modern web
          technologies.
        </p>

        <button>Apply Now</button>
      </div>
    </div>
  );
}

export default JobDetails;