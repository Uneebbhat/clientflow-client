import AuthLayout from "@/layout/AuthLayout";
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import resetSuccessImage from "@/assets/password-reset.png";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const PasswordResetSuccess: FC = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/login");
  };

  return (
    <AuthLayout>
      <div className="w-full flex justify-center items-center min-h-screen">
        <Card className="w-[500px] max-w-full p-6 shadow-lg border rounded-md">
          <CardHeader className="text-center">
            <img
              src={resetSuccessImage}
              alt="Password reset successful"
              className="mx-auto mb-4"
              width={100}
            />
            <CardTitle className="text-2xl font-bold mb-2">
              Password Reset Successfully
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-6">
              Your password has been successfully reset. You can now log in with
              your new password.
            </p>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
              onClick={handleRedirect}
            >
              Go to Login
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Didn’t request a password reset?{" "}
              <Link to="/support" className="text-blue-600 underline">
                Contact Support
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </AuthLayout>
  );
};

export default PasswordResetSuccess;
