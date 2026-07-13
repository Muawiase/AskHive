import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("general");
  const [message, setMessage] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1000);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setTopic("general");
    setMessage("");
    setSuccess(false);
  };

  return (
    <div className="animate-up page" style={{ background: "var(--bg-main)", minHeight: "calc(100vh - 72px)" }}>
      <div className="container" style={{ paddingTop: "40px", paddingBottom: "60px" }}>
        
        {/* Page Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "36px", fontWeight: 900, marginBottom: "8px" }}>
            Get in <span>Touch</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "16px" }}>
            Have a question, feedback, or need help with your account? We'd love to hear from you.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Contact Details */}
          <div className="card contact-info-card" style={{ background: "white", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}>
            <h2>Contact Details</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "30px", lineHeight: 1.6 }}>
              Feel free to reach out directly through our support email, office lines, or by submitting the contact form.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">✉️</div>
                <div className="contact-detail-text">
                  <h4>Email Support</h4>
                  <p>support@jonne.com</p>
                  <p style={{ fontSize: "12px", opacity: 0.7 }}>Average response time: &lt; 24 hrs</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">🕒</div>
                <div className="contact-detail-text">
                  <h4>Support Hours</h4>
                  <p>Monday - Friday</p>
                  <p>9:00 AM - 6:00 PM EST</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">📍</div>
                <div className="contact-detail-text">
                  <h4>Office Location</h4>
                  <p>JONNE EdTech Inc.</p>
                  <p>121 Varick St, New York, NY 10013</p>
                </div>
              </div>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "30px 0" }} />

            <div>
              <h4 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "12px", color: "var(--text-primary)" }}>Connect with us</h4>
              <div className="contact-social-row">
                <a href="#twitter" className="contact-social-btn" aria-label="Twitter">🐦</a>
                <a href="#linkedin" className="contact-social-btn" aria-label="LinkedIn">🔗</a>
                <a href="#github" className="contact-social-btn" aria-label="GitHub">💻</a>
              </div>
            </div>
          </div>

          {/* Right Column: Form Panel */}
          <div className="card contact-form-card" style={{ background: "white", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}>
            {success ? (
              <div className="contact-success">
                <div className="contact-success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p style={{ marginBottom: "24px" }}>
                  Thank you, <strong>{name || "there"}</strong>. We have received your message regarding <strong>{topic}</strong> and will contact you at <strong>{email}</strong> within 24 hours.
                </p>
                <button className="btn btn-primary" onClick={handleReset} style={{ margin: "0 auto" }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we will get back to you as soon as possible.</p>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Liam Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Topic</label>
                    <select
                      className="form-input"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      style={{ cursor: "pointer" }}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="account">Account Issue</option>
                      <option value="billing">Billing / Payments</option>
                      <option value="tutor_verification">Tutor Verification</option>
                      <option value="feedback">Platform Feedback</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-input"
                      placeholder="How can we help you today? Please be as detailed as possible."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                    disabled={loading}
                  >
                    {loading ? "Sending Message..." : "Send Message →"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
