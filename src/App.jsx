import { useState } from "react";
import Confetti from "react-confetti";

function App() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={styles.container}>
      {!submitted ? (
        <div style={styles.card}>
          <h1>Welcome to NSS Family 🎉</h1>
          <p>Once a volunteer always a volunteer</p>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <button
            onClick={() => setSubmitted(true)}
            style={styles.button}
          >
            Begin My Journey
          </button>
        </div>
      ) : (
        <div style={styles.card}>
          <Confetti />
          <h1>Welcome, {name}! 🎉</h1>
          <p>
            You are now an official NSS Volunteer.
            You didn’t just join a group — you joined a movement.
          </p>

          <h2>"Not Me, But You."</h2>

          <p>
            Your journey of service, leadership, and impact begins today.
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // background: "linear-gradient(to right, #ff9933, #ffffff)",
    background: "linear-gradient(135deg, #11998e, #38ef7d)",
    // background: "linear-gradient(135deg, #1e3c72, #2a5298)",
    fontFamily: "Arial",
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "12px",
    textAlign: "center",
    width: "350px",
  },
  input: {
    padding: "10px",
    width: "100%",
    marginTop: "15px",
  },
  button: {
    padding: "10px",
    marginTop: "20px",
    width: "100%",
    backgroundColor: "#ff9933",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default App;