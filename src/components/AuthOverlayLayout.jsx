import { useNavigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

export default function AuthOverlayLayout({ user, children, title }) {
  const navigate = useNavigate();

  const handleClose = () => navigate("/");

  return (
    <div className="auth-overlay-layout">
      <div className="auth-bg" aria-hidden="true">
        <div className="auth-bg-content">
          <LandingPage user={user} />
        </div>
      </div>

      <div className="auth-overlay-backdrop" onClick={handleClose}>
        <div
          className="auth-modal-shell"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <button
            type="button"
            className="auth-modal-close"
            onClick={handleClose}
            aria-label="Close"
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}
