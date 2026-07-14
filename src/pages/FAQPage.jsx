import { useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    category: "general",
    question: "What is JONNE?",
    answer: "JONNE is a peer study marketplace where students who need help with specific academic questions or debugging tasks connect with verified tutors and fellow peer students. We support both free sessions and custom paid bookings."
  },
  {
    category: "general",
    question: "What subjects can I ask about?",
    answer: "We support a wide variety of subjects including Mathematics, Physics, Chemistry, Biology, Economics, History, Writing, Literature, Languages, and Coding (Python, JS, React, etc.). Any school, university, or adult learning query is welcome!"
  },
  {
    category: "students",
    question: "How do I post a question?",
    answer: "Once logged in as a student, click 'Post Question' in the top navigation, specify the subject, write a detailed title and description, add files if needed, choose if it's Free or Paid, and hit submit. Helpers can then offer to match with you."
  },
  {
    category: "students",
    question: "Is it really free?",
    answer: "Yes! If you select the 'Free' tier when posting your question, you don't pay anything. Peer helpers and generous tutors answer out of community goodwill. If you choose 'Paid', you set an hourly rate (e.g. $15/hr) to hire a dedicated verified tutor."
  },
  {
    category: "tutors",
    question: "How do I become a verified tutor?",
    answer: "To become a verified tutor on JONNE, sign up for an account, select the 'Tutor' role, and fill out your profile details (subjects you teach, bio, rates). In a production environment, you would also submit credentials for our admin team to verify."
  },
  {
    category: "tutors",
    question: "How do I get paid?",
    answer: "When matching with a student on a paid question, you agree to an hourly rate. Payments are simulated in this prototype. In a live system, your earnings accumulate in your tutor wallet and are distributed weekly via PayPal or direct transfer."
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQ = faqData.filter(
    (faq) => activeCategory === "all" || faq.category === activeCategory
  );

  return (
    <div className="animate-up">
      <div className="faq-container">
        {/*  HERO  */}
        <div className="faq-hero">
          <h1>Frequently Asked <span>Questions</span></h1>
          <p>Have questions about JONNE? Find answers here or reach out to our team.</p>
        </div>

        {/*  CATEGORY BUTTONS  */}
        <div className="faq-categories">
          {["all", "general", "students", "tutors"].map((cat) => (
            <button
              key={cat}
              className={`faq-cat-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null); // Reset open accordion
              }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/*  ACCORDION LIST  */}
        <div className="faq-list">
          {filteredFAQ.length > 0 ? (
            filteredFAQ.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button className="faq-trigger" onClick={() => toggleFAQ(idx)}>
                    <span>{faq.question}</span>
                    <span className="faq-arrow"></span>
                  </button>
                  <div
                    className="faq-content"
                    style={{
                      maxHeight: isOpen ? "200px" : "0px",
                    }}
                  >
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div style={{ textAlign: "center", padding: "40px 0", color: "var(--text-secondary)" }}>
              No questions found in this category.
            </div>
          )}
        </div>

        {/*  FOOTER CTA  */}
        <div
          style={{
            marginTop: "60px",
            textAlign: "center",
            padding: "30px",
            background: "white",
            borderRadius: "var(--radius-md)",
            border: "1.5px solid var(--border)",
            boxShadow: "var(--shadow-sm)"
          }}
        >
          <h3 style={{ fontSize: "18px", fontWeight: 800, marginBottom: "8px" }}>Still have questions?</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "20px" }}>
            We'd love to help you clear up any doubts. Feel free to contact our support team.
          </p>
          <Link to="/contact" className="btn btn-secondary">
             Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
