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
            <h1 style={styles.title}>Welcome to Team NSS </h1>
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
          {/* FIXED FULL SCREEN BACKGROUND */}
          <div
            style={{
              ...styles.backgroundImage,
              backgroundImage: `url(${bgImage})`,
            }}
          />

          <div style={styles.overlay} />

          <div style={styles.overlayText}>
            <h1 style={styles.welcomeTitle}>
              Welcome,
              <br />
              <span style={styles.nameHighlight}>{name}</span>
            </h1>

            <p style={styles.welcomeText}>
              You are now part of something meaningful and impactful.
              It's an opportunity to grow, inspire and create a change.
              Through NSS, you will serve, learn, and transform lives - including your own.<br></br>
              {/* You're journey of Service begins today, let your small steps create a 
              big impact on society.
              Let us work together to build a better and responsible nation. */}
            </p>

            <p>
               
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "100vw",
    height: "100dvh", // 🔥 FIXED
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
    top: 0,
    left: 0,
    width: "100vw",
    height: "100dvh", // 🔥 FIXED
  },

  backgroundImage: {
    position: "fixed", // 🔥 changed from absolute
    top: 0,
    left: 0,
    width: "100vw",
    height: "100dvh",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    animation: "zoomEffect 35s ease-in-out infinite alternate",
    zIndex: -2,
  },

  overlay: {
    position: "fixed",
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
    zIndex: -1,
  },

  overlayText: {
    position: "relative",
    width: "55%",
    maxWidth: "750px",
    marginLeft: "8%",
    marginTop: "14%",
  },

  welcomeTitle: {
    fontSize: "clamp(52px, 6vw, 82px)",
    fontWeight: "900",
    marginBottom: "28px",
    lineHeight: "1.05",
    letterSpacing: "1px",
    color: "#f8f5f0",
    textShadow: "0 15px 50px rgba(0,0,0,0.85)",
  },

  nameHighlight: {
    color: "#e8d8b0",
    textShadow: "0 0 35px rgba(232,216,176,0.5)",
  },

  welcomeText: {
    fontSize: "clamp(20px, 2.5vw, 26px)",
    lineHeight: "1.8",
    marginBottom: "18px",
    color: "#d6dbe0",
    textShadow: "0 6px 25px rgba(0,0,0,0.75)",
  },

  movement: {
    fontWeight: "700",
    color: "#f1f3f4",
  },

  welcomeMotto: {
    fontSize: "clamp(22px, 3vw, 30px)",
    marginTop: "30px",
    fontWeight: "600",
    letterSpacing: "1px",
    color: "#eaeaea",
    textShadow: "0 8px 35px rgba(0,0,0,0.85)",
  },

  bigImpact: {
    fontSize: "clamp(28px, 3.5vw, 42px)",
    marginTop: "35px",
    fontWeight: "900",
    lineHeight: "1.4",
    letterSpacing: "0.5px",
    background: "linear-gradient(45deg, #ffffff, #e8d8b0)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 12px 45px rgba(0,0,0,0.9)",
  },
};

export default App;