import AuthLayout from "@/layout/AuthLayout";
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/logo.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import useForgotPassword from "@/hooks/useForgotPassword";
import Spinner from "@/components/Spinner";
import EmailSentSuccess from "./EmailSentSuccess";

const ForgotPasswordForm: FC = () => {
  const { email, loading, emailSent, handleInput, handleSubmit } =
    useForgotPassword();
  if (emailSent) {
    return <EmailSentSuccess />;
  }
  return (
    <AuthLayout>
      <div className="w-full flex justify-center">
        <Card className="w-[500px] max-w-full">
          <CardHeader className="text-center">
            <img
              src={logo}
              alt="ClientFlow"
              className="mx-auto mb-[20px]"
              width={200}
            />
            <CardTitle className="text-xl">
              Get the password reset link
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-[10px]" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="email">Email:</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="johndoe@example.com"
                  onChange={handleInput}
                />
              </div>
              <div>
                <Button
                  className="w-full"
                  type="submit"
                  disabled={!email || loading}
                >
                  {loading ? <Spinner /> : "Send me link"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordForm;
