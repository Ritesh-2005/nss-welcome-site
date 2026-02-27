import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import bgImage from "./photo.jpg";

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
    setTimeout(() => setShowConfetti(false), 8000);
  };

  return (
    <div style={styles.container}>
      {showConfetti && (
        <Confetti width={size.width} height={size.height} />
      )}

      {!submitted ? (
        <div style={styles.heroSection}>
          <div style={styles.heroContent}>
            <h1 style={styles.title}>Welcome to NSS Family</h1>
            <p style={styles.motto}>Not Me, But You.</p>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />

            <button onClick={handleSubmit} style={styles.button}>
              Begin My Journey
            </button>
          </div>
        </div>
      ) : (
        <div style={styles.fullScreenWrapper}>
          <div
            style={{
              ...styles.backgroundImage,
              backgroundImage: `url(${bgImage})`,
            }}
          />

          <div style={styles.overlay} />

          <div style={styles.overlayText}>
            <h1 style={styles.welcomeTitle}>
              Welcome,{" "}
              <span style={styles.nameHighlight}>{name}</span>
            </h1>

            <p style={styles.welcomeText}>
              You are now part of something meaningful.
            </p>

            <p style={styles.welcomeText}>
              This is not just volunteering —
              <span style={styles.movement}> it is impact.</span>
            </p>

            <h2 style={styles.welcomeMotto}>
              Once a volunteer, always a volunteer.
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    margin: 0,
    padding: 0,
    fontFamily: "'Segoe UI', sans-serif",
    overflow: "hidden",
    background: `
      radial-gradient(circle at 20% 25%, rgba(255,77,77,0.4), transparent 40%),
      radial-gradient(circle at 80% 75%, rgba(0,230,118,0.35), transparent 40%),
      linear-gradient(135deg, #141e30, #243b55)
    `,
  },

  /* FIRST PAGE */

  heroSection: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  heroContent: {
    textAlign: "center",
  },

  title: {
    fontSize: "clamp(38px, 6vw, 64px)",
    fontWeight: "800",
    marginBottom: "15px",
    background: "linear-gradient(45deg, #ffffff, #ff7676)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  motto: {
    fontSize: "clamp(18px, 3vw, 24px)",
    marginBottom: "40px",
    color: "#e0e0e0",
  },

  input: {
    padding: "16px",
    width: "320px",
    maxWidth: "90%",
    borderRadius: "50px",
    border: "none",
    marginBottom: "25px",
    fontSize: "16px",
    textAlign: "center",
  },

  button: {
    padding: "16px 45px",
    borderRadius: "50px",
    border: "none",
    background: "linear-gradient(45deg, #ff4d4d, #ff9966)",
    color: "white",
    fontWeight: "bold",
    fontSize: "17px",
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(255,77,77,0.4)",
  },

  /* SECOND PAGE */

  fullScreenWrapper: {
    position: "fixed",
    inset: 0,
  },

  backgroundImage: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    animation: "zoomEffect 35s ease-in-out infinite alternate",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: `
      linear-gradient(
        90deg,
        rgba(15,15,25,0.85) 0%,
        rgba(15,15,25,0.6) 40%,
        rgba(15,15,25,0.25) 70%,
        rgba(15,15,25,0.05) 100%
      )
    `,
  },

  overlayText: {
    position: "relative",
    width: "55%",
    maxWidth: "750px",
    marginLeft: "8%",
    marginTop: "14%",
    color: "#f2f2f2",
  },

  welcomeTitle: {
    fontSize: "clamp(48px, 6vw, 76px)",
    fontWeight: "900",
    marginBottom: "28px",
    lineHeight: "1.1",
    letterSpacing: "1px",
    textShadow: "0 10px 40px rgba(0,0,0,0.8)",
  },

  nameHighlight: {
    color: "#e6d3a3",
    textShadow: "0 0 30px rgba(230,211,163,0.6)",
  },

  welcomeText: {
    fontSize: "clamp(20px, 2.5vw, 26px)",
    lineHeight: "1.8",
    marginBottom: "18px",
    color: "#e5e5e5",
    textShadow: "0 6px 25px rgba(0,0,0,0.7)",
  },

  movement: {
    fontWeight: "bold",
    color: "#cfd8dc",
  },

  welcomeMotto: {
    fontSize: "clamp(22px, 3vw, 30px)",
    marginTop: "30px",
    fontWeight: "600",
    letterSpacing: "1px",
    color: "#f5f5f5",
    textShadow: "0 6px 30px rgba(0,0,0,0.8)",
  },
};

export default App;