import { Link } from "react-router-dom";
import { mockQuestions, mockTutors } from "../mockData";

const mySubjects = ["Coding", "Mathematics", "Computer Science"];
const myActiveJobs = mockQuestions.filter((q) => [2, 9].includes(q.id));
const myMatches = mockQuestions.filter(
  (q) => mySubjects.includes(q.subject) && q.status === "open" && ![2, 9].includes(q.id)
).slice(0, 4);

const earningsBreakdown = [
  { label: "This week", amount: 280, sessions: 4 },
  { label: "This month", amount: 1240, sessions: 18 },
  { label: "All time", amount: 4620, sessions: 71 },
];

export default function TutorDashboard({ user }) {
  return (
    <div className="page">
      {/* ── HEADER ── */}
      <div className="dashboard-header">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <h1>🎓 Welcome, {user.name.split(" ")[0]}!</h1>
              <p>You're making a real difference. Here's your dashboard.</p>
            </div>
            <Link to="/browse" className="btn btn-lg" style={{ background: "white", color: "var(--primary)", fontWeight: 700 }}>
              🔍 Find Questions
            </Link>
          </div>
        </div>
      </div>

      {/* ── STATS ROW ── */}
      <div className="container" style={{ paddingTop: 40 }}>
        <div className="stat-cards">
          {[
            { icon: "⚡", num: myActiveJobs.length, label: "Active Sessions" },
            { icon: "✅", num: 71, label: "Completed" },
            { icon: "⭐", num: "4.8", label: "Avg Rating" },
            { icon: "🤝", num: user.helpedFree, label: "Helped Free" },
          ].map((s) => (
            <div className="card stat-card" key={s.label}>
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-number">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── EARNINGS + FREE IMPACT ── */}
      <div className="container" style={{ paddingTop: 32 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          <div className="earnings-highlight">
            <div>
              <div style={{ opacity: 0.85, fontSize: 14, marginBottom: 4 }}>💰 Total Earned This Month</div>
              <div className="earnings-amount">$1,240</div>
              <div style={{ opacity: 0.8, fontSize: 13, marginTop: 4 }}>18 paid sessions · avg $68.9/session</div>
            </div>
            <div style={{ fontSize: 48, opacity: 0.7 }}>💳</div>
          </div>
          <div className="free-impact">
            <div>
              <div style={{ opacity: 0.85, fontSize: 14, marginBottom: 4 }}>🤝 Free Impact This Month</div>
              <div className="earnings-amount">{user.helpedFree}</div>
              <div style={{ opacity: 0.8, fontSize: 13, marginTop: 4 }}>students helped for free · legend! 🌟</div>
            </div>
            <div style={{ fontSize: 48, opacity: 0.7 }}>❤️</div>
          </div>
        </div>

        {/* EARNINGS BREAKDOWN */}
        <div className="card" style={{ marginTop: 20 }}>
          <div className="card-inner">
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>📊 Earnings Breakdown</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
              {earningsBreakdown.map((e) => (
                <div key={e.label} style={{ textAlign: "center", padding: "20px", background: "var(--bg-main)", borderRadius: "var(--radius-sm)", border: "1.5px solid var(--border)" }}>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "var(--primary)" }}>${e.amount.toLocaleString()}</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>{e.label}</div>
                  <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }}>{e.sessions} sessions</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── ACTIVE SESSIONS ── */}
      <div className="container dashboard-section">
        <h2 className="dashboard-section-title">⚡ Active Sessions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {myActiveJobs.map((q) => (
            <div className="card" key={q.id}>
              <div className="card-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                    <span className="badge badge-subject">{q.subjectIcon} {q.subject}</span>
                    <span className={`status-pill status-in-progress`}>⚡ In Progress</span>
                    {q.isPaid ? (
                      <span className="badge badge-paid">💰 ${q.pricePerHour}/hr</span>
                    ) : (
                      <span className="badge badge-free">✅ FREE</span>
                    )}
                  </div>
                  <Link to={`/question/${q.id}`}>
                    <h3 style={{ fontWeight: 700, fontSize: 15 }}>{q.title}</h3>
                  </Link>
                  <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 6 }}>
                    👤 {q.studentName} · 📅 Due {new Date(q.deadline).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <Link to={`/question/${q.id}`}>
                    <button className="btn btn-sm btn-primary">Open Chat →</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MATCHING QUESTIONS ── */}
      <div className="container dashboard-section" style={{ paddingTop: 0 }}>
        <h2 className="dashboard-section-title">
          🔍 Open Questions Matching Your Subjects
          <span style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 400, marginLeft: 8 }}>
            {mySubjects.join(", ")}
          </span>
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {myMatches.map((q) => (
            <div className="card" key={q.id}>
              <div className="card-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                    <span className="badge badge-subject">{q.subjectIcon} {q.subject}</span>
                    {q.isPaid ? (
                      <span className="badge badge-paid">💰 ${q.pricePerHour}/hr</span>
                    ) : (
                      <span className="badge badge-free">✅ FREE</span>
                    )}
                    <span className="badge badge-level">{q.level}</span>
                    {q.urgency === "high" && (
                      <span className="badge badge-urgent">🔥 Urgent</span>
                    )}
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: 15 }}>{q.title}</h3>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 4, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {q.description}
                  </p>
                  <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 6, display: "flex", gap: 12 }}>
                    <span>👤 {q.studentName}</span>
                    <span>💬 {q.responses} responses</span>
                    <span>📅 Due {new Date(q.deadline).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <Link to={`/question/${q.id}`}>
                    <button className="btn btn-sm btn-success">
                      {q.isPaid ? "💰 Bid" : "🤝 Volunteer"}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Link to="/browse" className="btn btn-secondary">
            Browse All Questions →
          </Link>
        </div>
      </div>
    </div>
  );
}
