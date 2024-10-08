import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AuthLayout from "@/layout/AuthLayout";
import { FC } from "react";
import logo from "@/assets/logo.svg";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import useLogin from "@/hooks/useLogin";
import useTogglePassword from "@/hooks/useTogglePassword";
import { Eye, EyeOff } from "lucide-react";
import Spinner from "./Spinner";

const LoginForm: FC = () => {
  const { formData, handleInput, handleSubmit, loading } = useLogin();
  const { showPassword, handleTogglePassword } = useTogglePassword();

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
            <CardTitle className="text-xl">Login to continue</CardTitle>
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
              <div className="relative">
                <Label htmlFor="password">Password:</Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
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
                <Link
                  to="/forgot-password"
                  className="text-sm text-indigo-500 hover:text-indigo-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <div>
                <Button
                  className="w-full"
                  type="submit"
                  disabled={!formData.email || !formData.password || loading}
                >
                  {loading ? <Spinner /> : "Login"}
                </Button>
              </div>
            </form>
            <div className="mt-6">
              <Separator />
            </div>
          </CardContent>
          <CardFooter className="text-center">
            <p className="font-semibold">
              Don't have a ClientFlow account?{" "}
              <Link
                to="/signup"
                className="underline font-bold text-indigo-500"
              >
                Signup
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </AuthLayout>
  );
};

export default LoginForm;
