function Register() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Register</h1>

      <input
        type="text"
        placeholder="Enter Name"
        style={{ padding: "10px", width: "250px" }}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        style={{ padding: "10px", width: "250px" }}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        style={{ padding: "10px", width: "250px" }}
      />

      <br /><br />

      <button className="search-btn">
        Register
      </button>
    </div>
  );
}

export default Register;