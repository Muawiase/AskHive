import { Link } from "react-router-dom";

export default function GuestModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-icon">🔒</div>
        <h2 className="modal-title">Create a free account to continue</h2>
        <p className="modal-sub">
          You're browsing as a guest. Sign up for free to post questions, message
          tutors, and get the help you need — no credit card required.
        </p>
        <div className="modal-actions">
          <Link to="/login" className="btn btn-primary btn-lg" onClick={onClose}>
            🚀 Sign Up for Free
          </Link>
          <Link
            to="/login"
            className="btn btn-secondary"
            onClick={onClose}
            style={{ justifyContent: "center" }}
          >
            Already have an account? Log In
          </Link>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-muted)",
              fontSize: 14,
              cursor: "pointer",
              marginTop: 4,
            }}
          >
            Continue browsing as guest
          </button>
        </div>
      </div>
    </div>
  );
}
