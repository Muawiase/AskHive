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
              <h1>Welcome, {user.name.split(" ")[0]}!</h1>
              <p>You're making a real difference. Here's your dashboard.</p>
            </div>
            <Link to="/browse" className="btn btn-lg" style={{ background: "white", color: "var(--primary)", fontWeight: 700 }}>
              Find Questions
            </Link>
          </div>
        </div>
      </div>

      {/* ── STATS ROW ── */}
      <div className="container" style={{ paddingTop: 40 }}>
        <div className="stat-cards">
          {[
            { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, num: myActiveJobs.length, label: "Active Sessions" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>, num: 71, label: "Completed" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, num: "4.8", label: "Avg Rating" },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, num: user.helpedFree, label: "Helped Free" },
          ].map((s) => (
            <div className="card stat-card" key={s.label}>
              <div className="stat-icon" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>{s.icon}</div>
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
              <div style={{ opacity: 0.85, fontSize: 14, marginBottom: 4 }}>Total Earned This Month</div>
              <div className="earnings-amount">$1,240</div>
              <div style={{ opacity: 0.8, fontSize: 13, marginTop: 4 }}>18 paid sessions · avg $68.9/session</div>
            </div>
            <div style={{ opacity: 0.6 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            </div>
          </div>
          <div className="free-impact">
            <div>
              <div style={{ opacity: 0.85, fontSize: 14, marginBottom: 4 }}>Free Impact This Month</div>
              <div className="earnings-amount">{user.helpedFree}</div>
              <div style={{ opacity: 0.8, fontSize: 13, marginTop: 4 }}>students helped for free · thank you!</div>
            </div>
            <div style={{ opacity: 0.6 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </div>
          </div>
        </div>

        {/* EARNINGS BREAKDOWN */}
        <div className="card" style={{ marginTop: 20 }}>
          <div className="card-inner">
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Earnings Breakdown</h2>
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
        <h2 className="dashboard-section-title">Active Sessions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {myActiveJobs.map((q) => (
            <div className="card" key={q.id}>
              <div className="card-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                    <span className="badge badge-subject">{q.subject}</span>
                    <span className={`status-pill status-in-progress`}>In Progress</span>
                    {q.isPaid ? (
                      <span className="badge badge-paid">${q.pricePerHour}/hr</span>
                    ) : (
                      <span className="badge badge-free">FREE</span>
                    )}
                  </div>
                  <Link to={`/question/${q.id}`}>
                    <h3 style={{ fontWeight: 700, fontSize: 15 }}>{q.title}</h3>
                  </Link>
                  <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 6 }}>
                    by {q.studentName} · Due {new Date(q.deadline).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
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
          Open Questions Matching Your Subjects
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
                    <span className="badge badge-subject">{q.subject}</span>
                    {q.isPaid ? (
                      <span className="badge badge-paid">${q.pricePerHour}/hr</span>
                    ) : (
                      <span className="badge badge-free">FREE</span>
                    )}
                    <span className="badge badge-level">{q.level}</span>
                    {q.urgency === "high" && (
                      <span className="badge badge-urgent">Urgent</span>
                    )}
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: 15 }}>{q.title}</h3>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 4, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {q.description}
                  </p>
                  <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 6, display: "flex", gap: 12 }}>
                    <span>by {q.studentName}</span>
                    <span>{q.responses} responses</span>
                    <span>Due {new Date(q.deadline).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <Link to={`/question/${q.id}`}>
                    <button className="btn btn-sm btn-success">
                      {q.isPaid ? "Bid" : "Volunteer"}
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
