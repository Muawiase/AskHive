import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ user, onLogout }) {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const dashboardPath = user?.role === "tutor" ? "/dashboard/tutor" : "/dashboard/student";

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🐝</span>
          <span className="logo-text">AskHive</span>
        </Link>

        <div className="navbar-links">
          <Link to="/browse">🔍 Browse Questions</Link>

          {user ? (
            <>
              {user.role === "student" && (
                <Link to="/post">✏️ Post a Question</Link>
              )}
              <Link to={dashboardPath} className="navbar-dashboard">
                📋 My Dashboard
              </Link>
              <div className="navbar-user">
                <div
                  className="navbar-avatar"
                  style={{ background: user.avatarColor }}
                >
                  {user.avatar}
                </div>
                <div>
                  <div className="navbar-user-name">{user.name}</div>
                  <div className="navbar-user-role">
                    {user.role === "tutor" ? "🎓 Tutor" : "📚 Student"}
                  </div>
                </div>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => { onLogout(); navigate("/"); }}
                  style={{ marginLeft: 8 }}
                >
                  Sign Out
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-sm btn-primary nav-cta">
                Log In / Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
