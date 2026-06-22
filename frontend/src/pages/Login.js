import { useState } from "react";

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async () => {
try {
const response = await fetch("http://localhost:5000/login", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
email,
password,
}),
});


  const data = await response.json();

  console.log("Response:", data);
  alert(JSON.stringify(data));
} catch (error) {
  console.log(error);
  alert("Backend Connection Error");
}


};

return (
<div style={{ textAlign: "center", padding: "50px" }}> <h1>Login</h1>


  <input
    type="email"
    placeholder="Enter Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    style={{ padding: "10px", width: "250px" }}
  />

  <br /><br />

  <input
    type="password"
    placeholder="Enter Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    style={{ padding: "10px", width: "250px" }}
  />

  <br /><br />

  <button className="search-btn" onClick={handleLogin}>
    Login
  </button>
</div>


);
}

export default Login;
