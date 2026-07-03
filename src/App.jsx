import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import BrowsePage from "./pages/BrowsePage";
import PostQuestionPage from "./pages/PostQuestionPage";
import QuestionDetailPage from "./pages/QuestionDetailPage";
import TutorProfilePage from "./pages/TutorProfilePage";
import StudentDashboard from "./pages/StudentDashboard";
import TutorDashboard from "./pages/TutorDashboard";
import GuestModal from "./components/GuestModal";
import { mockUsers } from "./mockData";

export default function App() {
  const [user, setUser] = useState(null); // null = guest
  const [showGuestModal, setShowGuestModal] = useState(false);
  const [questions, setQuestions] = useState(null); // managed in Browse

  const login = (role) => {
    setUser(role === "tutor" ? mockUsers.tutor : mockUsers.student);
  };

  const logout = () => setUser(null);

  const requireAuth = (element) => {
    if (!user) {
      return (
        <>
          {element}
          <GuestModal onClose={() => setShowGuestModal(false)} />
        </>
      );
    }
    return element;
  };

  return (
    <div className="app">
      <Navbar user={user} onLogout={logout} />
      {showGuestModal && (
        <GuestModal onClose={() => setShowGuestModal(false)} />
      )}
      <Routes>
        <Route path="/" element={<LandingPage user={user} />} />
        <Route path="/login" element={<LoginPage onLogin={login} user={user} />} />
        <Route
          path="/browse"
          element={<BrowsePage user={user} onGuestAction={() => setShowGuestModal(true)} />}
        />
        <Route
          path="/post"
          element={
            user ? (
              <PostQuestionPage user={user} />
            ) : (
              <BrowsePage
                user={user}
                onGuestAction={() => setShowGuestModal(true)}
                forceGuestModal
              />
            )
          }
        />
        <Route
          path="/question/:id"
          element={
            <QuestionDetailPage user={user} onGuestAction={() => setShowGuestModal(true)} />
          }
        />
        <Route path="/tutor/:id" element={<TutorProfilePage user={user} onGuestAction={() => setShowGuestModal(true)} />} />
        <Route
          path="/dashboard/student"
          element={user?.role === "student" ? <StudentDashboard user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard/tutor"
          element={user?.role === "tutor" ? <TutorDashboard user={user} /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
