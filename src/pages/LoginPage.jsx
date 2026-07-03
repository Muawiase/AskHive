import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage({ onLogin, user }) {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login"); // 'login' | 'signup'
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (user) {
    navigate(user.role === "tutor" ? "/dashboard/tutor" : "/dashboard/student");
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onLogin(role);
      navigate(role === "tutor" ? "/dashboard/tutor" : "/dashboard/student");
    }, 800);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          <div style={{ fontSize: 40, marginBottom: 8 }}>🐝</div>
          <div className="logo-text">AskHive</div>
          <p style={{ color: "var(--text-secondary)", fontSize: 14, marginTop: 8 }}>
            {mode === "login" ? "Welcome back! Ready to learn?" : "Join thousands of learners today."}
          </p>
        </div>

        <div className="auth-toggle">
          <button
            className={mode === "login" ? "active" : ""}
            onClick={() => setMode("login")}
          >
            Log In
          </button>
          <button
            className={mode === "signup" ? "active" : ""}
            onClick={() => setMode("signup")}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {mode === "signup" && (
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                className="form-input"
                type="text"
                placeholder="e.g. Amara Kone"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              className="form-input"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              placeholder={mode === "signup" ? "Create a password" : "Enter your password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">I am a…</label>
            <div className="role-selector">
              <button
                type="button"
                className={`role-btn ${role === "student" ? "active" : ""}`}
                onClick={() => setRole("student")}
              >
                📚 Student / Learner
              </button>
              <button
                type="button"
                className={`role-btn ${role === "tutor" ? "active" : ""}`}
                onClick={() => setRole("tutor")}
              >
                🎓 Tutor / Helper
              </button>
            </div>
            <p className="form-hint">
              {role === "student"
                ? "You'll be able to post questions and find help."
                : "You'll be able to browse questions and offer your expertise."}
            </p>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center", marginBottom: 16 }}
            disabled={submitted}
          >
            {submitted
              ? "✅ Logging you in…"
              : mode === "login"
              ? "Log In →"
              : "Create Account →"}
          </button>
        </form>

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              height: 1,
              background: "var(--border)",
              margin: "20px 0",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: "50%",
                top: -10,
                transform: "translateX(-50%)",
                background: "white",
                padding: "0 12px",
                fontSize: 12,
                color: "var(--text-muted)",
              }}
            >
              or
            </span>
          </div>
          <Link
            to="/browse"
            style={{ color: "var(--text-muted)", fontSize: 14, textDecoration: "underline" }}
          >
            Continue as Guest (browse only)
          </Link>
        </div>

        {/* DEMO HINT */}
        <div
          style={{
            marginTop: 24,
            background: "var(--primary-light)",
            border: "1.5px solid var(--primary)",
            borderRadius: "var(--radius-sm)",
            padding: "14px 16px",
            fontSize: 13,
            color: "var(--primary)",
          }}
        >
          <strong>💡 Demo tip:</strong> Select Student or Tutor and click Log In to
          see different dashboard views. No real credentials needed!
        </div>
      </div>
    </div>
  );
}
