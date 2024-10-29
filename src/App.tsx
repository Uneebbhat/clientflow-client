import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Home/HomePage";
import SignupPage from "@/pages/Signup/SignupPage";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";
import LoginPage from "@/pages/Login/LoginPage";
import ForgotPasswordPage from "@/pages/ForgotPassword/ForgotPasswordPage";
import ResetPasswordPage from "@/pages/ResetPassword/ResetPasswordPage";
import PipelinesPage from "@/pages/Pipelines/PipelinesPage";
import PipelinesDetailPage from "@/pages/Pipelines/PipelinesDetail/PipelinesDetailPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pipelines" element={<PipelinesPage />} />
          <Route
            path="/pipelines/:companyName"
            element={<PipelinesDetailPage />}
          />
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
