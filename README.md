# 🐝 AskHive — Study Help Marketplace (Visual Blueprint)

AskHive is a friendly, approachable study-help marketplace prototype designed to connect students who need assistance with verified tutors and peer student helpers. This repository contains the **visual blueprint and interactive frontend prototype** built using React, Vite, and custom CSS.

---

## 🚀 Core Concept

Students struggling with a subject post a question and choose one of two modes:
1. **Paid**: Set an hourly rate they are willing to pay for professional tutor assistance.
2. **Free**: Mark the question as "Help me for free," opening it to any peer student or tutor willing to assist out of goodwill.

Helpers can be **Verified Tutors** (professionals) or **Peer Student Helpers** (fellow students). AskHive welcomes learners of all levels — high schoolers, university students, adult learners, and self-learners.

---

## 🛠️ Tech Stack

- **Frontend Core**: React (Functional Components + Hooks)
- **Styling**: Vanilla CSS (Tailored HSL design tokens, soft shadows, rounded components, glassmorphism, responsive grid layouts)
- **Routing**: React Router (`react-router-dom`)
- **Build Tool**: Vite
- **Data Layer**: Mock JSON database with simulated login/role sessions

---

## ✨ Screens & Features Built

1. **Landing Page**: Explains the core concept with interactive tabs, features animated subject directories, comparison tables (Free vs. Paid), testimonials, and responsive action banners.
2. **Interactive Search & Browse**: Feed of 10+ mock questions with real-time text search, subject filtering, student-level filtering, sort configurations, and a live "Free-Only" toggle.
3. **Question Posting Console**: Form with subject/level selectors, calendar deadlines, mock attachment dropzones, paid/free mode pricing inputs, and a live side-by-side post preview.
4. **Question Detail & Bid Flow**: Full question descriptions with bids/offers from tutors, status states, and a simulated live chat terminal.
5. **Tutor Profiles**: Rating stars, review cards, subjects taught, and dynamic availability calendars.
6. **Dual Dashboards**:
   - **Student Dashboard**: Track open, in-progress, and solved questions along with personalized tutor suggestions.
   - **Tutor Dashboard**: Month/week earnings breakdown, a "helped for free" community impact counter, active sessions, and an auto-matched questions feed based on their subjects.
7. **Guest Access Control**: Fully simulated guest restriction modal that prompts sign-up/login whenever a guest tries to post a question, bid on a job, or send a message.

---

## 📦 Project Structure

```text
├── public/
├── src/
│   ├── components/
│   │   ├── Cards.jsx         # QuestionCard and TutorCard components
│   │   ├── GuestModal.jsx    # "Create Account" guest restriction modal
│   │   └── Navbar.jsx        # Navigation bar with user context states
│   ├── pages/
│   │   ├── BrowsePage.jsx    # Searching, sorting, and filtering feed
│   │   ├── LandingPage.jsx   # Hero section and features showcase
│   │   ├── LoginPage.jsx     # Role-based login and signup simulation
│   │   ├── PostQuestionPage.jsx # Post question wizard with live preview
│   │   ├── QuestionDetailPage.jsx # Helper bids list and mock messaging
│   │   ├── StudentDashboard.jsx # Student-specific job manager
│   │   ├── TutorDashboard.jsx   # Tutor earnings, stats, and matching jobs
│   │   └── TutorProfilePage.jsx # Reviews, ratings, and booking calendars
│   ├── App.jsx               # Application Router & user session state
│   ├── index.css             # Design tokens & global stylesheet
│   ├── main.jsx              # Render mount point
│   └── mockData.js           # Database simulation (questions, tutors, users)
├── index.html
├── package.json
└── vite.config.js
```

---

## 🏃‍♂️ How to Run Locally

### 1. Clone the repository
```bash
git clone <repository-url>
cd ANSWER
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open **`http://localhost:5173/`** in your browser to view the application.

### 4. Build for Production
```bash
npm run build
```
Production assets will be built into the `dist/` directory.

---

## 💡 Demo Tips for Stakeholders

- **To browse freely**: Click **Continue as Guest** or **Browse Questions** on the Landing Page.
- **To test the Student experience**: Go to Login, choose **Student / Learner**, and click Log In. Go to "Post a Question" to try out the form.
- **To test the Tutor experience**: Go to Login, choose **Tutor / Helper**, and click Log In. Look at the active sessions, matching questions feed, and mock earnings ledger.
