function Login() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Login</h1>

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
        Login
      </button>
    </div>
  );
}

export default Login;