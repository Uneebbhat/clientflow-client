import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Home/HomePage";
import SignupPage from "@/pages/Signup/SignupPage";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";
import LoginPage from "@/pages/Login/LoginPage";
import ForgotPasswordPage from "@/pages/ForgotPassword/ForgotPasswordPage";
import ResetPasswordPage from "@/pages/ResetPassword/ResetPasswordPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;