import { FC } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.svg";
import useChangeTitle from "@/utils/useChangeTitle";

const NotFoundPage: FC = () => {
  const navigate = useNavigate();
  useChangeTitle("ClientFlow | Not Found");

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 p-5">
      <img src={logo} alt="Logo" className="mb-8" />
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-4 mb-6">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Button onClick={handleGoHome}>Go Home</Button>
    </div>
  );
};

export default NotFoundPage;
