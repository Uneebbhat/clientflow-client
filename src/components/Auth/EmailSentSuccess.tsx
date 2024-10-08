import AuthLayout from "@/layout/AuthLayout";
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import emailSent from "@/assets/email-sent.png";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const EmailSentSuccess: FC = () => {
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
              src={emailSent}
              alt="Password reset email sent"
              className="mx-auto mb-4"
              width={100}
            />
            <CardTitle className="text-2xl font-bold mb-2">
              Email Sent Successfully
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-6">
              We’ve sent a password reset link to your email address. Please
              check your inbox and follow the instructions to reset your
              password.
            </p>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
              onClick={handleRedirect}
            >
              Go back to Login
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Didn’t receive the email?{" "}
              <Link to="/" className="text-blue-600 underline">
                Resend
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </AuthLayout>
  );
};

export default EmailSentSuccess;
