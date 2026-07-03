import { Link } from "react-router-dom";
import { mockQuestions } from "../mockData";

const statusConfig = {
  open: { label: "Open", cls: "status-open", icon: "🔓" },
  "in-progress": { label: "In Progress", cls: "status-in-progress", icon: "⚡" },
  solved: { label: "Solved", cls: "status-solved", icon: "✅" },
};

const myQuestions = [
  ...mockQuestions.filter((q) => q.studentId === 1 || q.studentId === 4).slice(0, 4),
  { ...mockQuestions[5], status: "solved", studentId: 1 },
];

export default function StudentDashboard({ user }) {
  const open = myQuestions.filter((q) => q.status === "open");
  const inProgress = myQuestions.filter((q) => q.status === "in-progress");
  const solved = myQuestions.filter((q) => q.status === "solved");

  return (
    <div className="page">
      {/* ── HEADER ── */}
      <div className="dashboard-header">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <h1>👋 Welcome back, {user.name.split(" ")[0]}!</h1>
              <p>Here's a summary of your questions and progress.</p>
            </div>
            <Link to="/post" className="btn btn-lg" style={{ background: "white", color: "var(--primary)", fontWeight: 700 }}>
              ✏️ Post a New Question
            </Link>
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="container" style={{ paddingTop: 40 }}>
        <div className="stat-cards">
          {[
            { icon: "📋", num: myQuestions.length, label: "Total Questions" },
            { icon: "🔓", num: open.length, label: "Open" },
            { icon: "⚡", num: inProgress.length, label: "In Progress" },
            { icon: "✅", num: solved.length, label: "Solved" },
          ].map((s) => (
            <div className="card stat-card" key={s.label}>
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-number">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MY QUESTIONS ── */}
      <div className="container dashboard-section">
        {[
          { label: "🔓 Open Questions", questions: open },
          { label: "⚡ In Progress", questions: inProgress },
          { label: "✅ Solved", questions: solved },
        ].map(({ label, questions }) =>
          questions.length > 0 ? (
            <div key={label} style={{ marginBottom: 40 }}>
              <h2 className="dashboard-section-title">{label}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {questions.map((q) => {
                  const sc = statusConfig[q.status] || statusConfig.open;
                  return (
                    <div className="card" key={q.id}>
                      <div className="card-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                            <span className={`status-pill ${sc.cls}`}>{sc.icon} {sc.label}</span>
                            <span className="badge badge-subject">{q.subjectIcon} {q.subject}</span>
                            {q.isPaid ? (
                              <span className="badge badge-paid">💰 ${q.pricePerHour}/hr</span>
                            ) : (
                              <span className="badge badge-free">✅ FREE</span>
                            )}
                          </div>
                          <Link to={`/question/${q.id}`}>
                            <h3 style={{ fontWeight: 700, fontSize: 15, lineHeight: 1.4 }}>{q.title}</h3>
                          </Link>
                          <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 6, display: "flex", gap: 12 }}>
                            <span>💬 {q.responses} responses</span>
                            <span>📅 Due {new Date(q.deadline).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</span>
                          </div>
                        </div>
                        <div style={{ display: "flex", gap: 8 }}>
                          <Link to={`/question/${q.id}`}>
                            <button className="btn btn-sm btn-primary">View →</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null
        )}
      </div>

      {/* ── RECOMMENDED TUTORS ── */}
      <div className="container dashboard-section" style={{ paddingTop: 0 }}>
        <h2 className="dashboard-section-title">🎓 Recommended Tutors for You</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {[
            { name: "Dr. Fatima Al-Hassan", avatar: "👩🏽‍🏫", subject: "Mathematics & Physics", rating: 4.9, rate: "$18–$30/hr", color: "#6C63FF", isVerified: true },
            { name: "Zara Williams", avatar: "👩🏿‍📚", subject: "History & Economics", rating: 4.5, rate: "$8–$14/hr or FREE", color: "#A29BFE", isVerified: false },
          ].map((t) => (
            <div className="card" key={t.name}>
              <div className="card-inner" style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: t.color + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>
                  {t.avatar}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{t.name}</div>
                  {t.isVerified ? (
                    <span className="badge badge-verified" style={{ fontSize: 11 }}>✓ Verified</span>
                  ) : (
                    <span className="badge badge-peer" style={{ fontSize: 11 }}>👥 Peer</span>
                  )}
                  <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 6 }}>{t.subject}</div>
                  <div style={{ fontSize: 13, color: "var(--accent-warm)", fontWeight: 600 }}>★ {t.rating} · {t.rate}</div>
                </div>
                <button className="btn btn-sm btn-secondary">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
