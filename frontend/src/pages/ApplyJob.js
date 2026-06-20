function ApplyJob() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Apply for Job</h1>

      <input
        type="text"
        placeholder="Full Name"
        style={{ padding: "10px", width: "300px" }}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Email"
        style={{ padding: "10px", width: "300px" }}
      />

      <br /><br />

      <input type="file" />

      <br /><br />

      <button className="search-btn">
        Submit Application
      </button>
    </div>
  );
}

export default ApplyJob;