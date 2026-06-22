function CandidateDashboard() {
  return (
    <div className="jobs">
      <h1>Candidate Dashboard</h1>

      <div className="job-card" style={{ width: "500px", margin: "auto" }}>
        <h3>Profile Information</h3>

        <p><strong>Name:</strong> Senorin</p>
        <p><strong>Email:</strong> senorin@example.com</p>

        <hr />

        <h3>Applied Jobs</h3>

        <ul style={{ textAlign: "left" }}>
          <li>Frontend Developer - Infosys</li>
          <li>React Developer - Capgemini</li>
          <li>Data Analyst - Cognizant</li>
        </ul>
      </div>
    </div>
  );
}

export default CandidateDashboard;