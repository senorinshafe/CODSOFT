import { useState } from "react";

function ApplyJob() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Application Submitted Successfully!\nEmail Notification Sent!"
    );

    setName("");
    setEmail("");
  };

  return (
    <div className="jobs">
      <h1>Apply For Job</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="file"
          accept=".pdf,.doc,.docx"
        />

        <button type="submit">
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default ApplyJob;