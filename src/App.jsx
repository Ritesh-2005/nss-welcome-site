import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import bgImage from "./photo.png"
// import bgImage from "src/photo.png"; // <-- put your collage image here

function App() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = () => {
    if (!name.trim()) return;
    setSubmitted(true);
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 4000);
  };

  return (
    <div style={styles.container}>
      {showConfetti && (
        <Confetti width={size.width} height={size.height} />
      )}

      {!submitted ? (
        <div style={styles.card}>
          <h1 style={styles.title}>Welcome to NSS Family 🎉</h1>
          <h2 style={styles.motto}>"Not Me, But You."</h2>
          <p style={styles.subtitle}>
            Once a volunteer, always a volunteer.
          </p>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <button onClick={handleSubmit} style={styles.button}>
            Begin My Journey 🚀
          </button>
        </div>
      ) : (
        <div style={styles.fullScreenWrapper}>
          {/* Background Image */}
          <div
            style={{
              ...styles.backgroundImage,
              backgroundImage: `url(${bgImage})`,
            }}
          />

          {/* Overlay */}
          <div style={styles.overlay} />

          {/* Content */}
          <div style={styles.welcomeContent}>
            <h1 style={styles.welcomeTitle}>
              Welcome, {name}! 🎉
            </h1>

            <p style={styles.welcomeText}>
              You are now an official NSS Volunteer.
              <br />
              You didn’t just join a group —
              <strong> you joined a movement.</strong>
            </p>

            <h2 style={styles.welcomeMotto}>
              Once a volunteer, always a volunteer.
            </h2>

            <p style={styles.welcomeText}>
              Your journey of service, leadership, and impact begins today.
            </p>
          </div>
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
    background: "linear-gradient(135deg, #11998e, #38ef7d)",
    fontFamily: "'Segoe UI', sans-serif",
  },

  card: {
    background: "white",
    padding: "45px",
    borderRadius: "20px",
    textAlign: "center",
    width: "360px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
  },

  title: {
    marginBottom: "10px",
  },

  motto: {
    color: "#11998e",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "14px",
    marginBottom: "20px",
    color: "#555",
  },

  input: {
    padding: "12px",
    width: "100%",
    borderRadius: "10px",
    border: "1px solid #ddd",
    marginTop: "10px",
    marginBottom: "15px",
    outline: "none",
  },

  button: {
    padding: "12px",
    width: "100%",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#11998e",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s ease",
  },

  fullScreenWrapper: {
    position: "fixed",
    inset: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
  },

  backgroundImage: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    animation: "zoomEffect 20s ease-in-out infinite alternate",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.85))",
  },

  welcomeContent: {
    position: "relative",
    maxWidth: "600px",
    padding: "30px",
  },

  welcomeTitle: {
    fontSize: "38px",
    marginBottom: "20px",
  },

  welcomeText: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "20px",
  },

  welcomeMotto: {
    fontSize: "22px",
    marginBottom: "20px",
    color: "#38ef7d",
  },
};

export default App;