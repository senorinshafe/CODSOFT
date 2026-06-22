const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Register API
app.post("/register", async (req, res) => {
try {
const { name, email, password } = req.body;


const newUser = new User({
  name,
  email,
  password,
});

await newUser.save();

res.json({ message: "User Registered Successfully" });


} catch (error) {
res.status(500).json({ error: error.message });
}
});

// Login API
app.post("/login", async (req, res) => {
try {
const { email, password } = req.body;


const user = await User.findOne({
  email,
  password,
});

if (user) {
  res.json({ message: "Login Successful" });
} else {
  res.status(400).json({
    message: "Invalid Email or Password",
  });
}


} catch (error) {
console.log("LOGIN ERROR:", error);
res.status(500).json({
error: error.message,
stack: error.stack
});
}
});

app.get("/", (req, res) => {
res.send("Job Board Backend Running");
});

app.listen(5000, () => {
console.log("Server running on port 5000");
});
