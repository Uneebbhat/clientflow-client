import AuthLayout from "@/layout/AuthLayout";
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import { Eye, EyeOff } from "lucide-react";
import useTogglePassword from "@/hooks/useTogglePassword";
import useResetPassword from "@/hooks/useResetPassword";
import Spinner from "@/components/Spinner";
import PasswordResetSuccess from "./PasswordResetSuccess";

const ResetPasswordForm: FC = () => {
  const { password, loading, passwordReset, handleInput, handleSubmit } =
    useResetPassword();
  const { showPassword, handleTogglePassword } = useTogglePassword();

  if (passwordReset) {
    return <PasswordResetSuccess />;
  }
  return (
    <>
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
              <form
                className="flex flex-col gap-[10px]"
                onSubmit={handleSubmit}
              >
                <div className="relative">
                  <Label htmlFor="password">Password:</Label>
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={password}
                    placeholder={showPassword ? "Password" : "********"}
                    onChange={handleInput}
                  />
                  <div
                    className="absolute top-[32px] right-2 cursor-pointer"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </div>
                </div>
                <div>
                  <Button
                    className="w-full"
                    type="submit"
                    disabled={!password || loading}
                  >
                    {loading ? <Spinner /> : "Reset password"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </AuthLayout>
    </>
  );
};

export default ResetPasswordForm;
