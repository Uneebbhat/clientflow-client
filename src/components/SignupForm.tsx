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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import useSignup from "@/hooks/useSignup";
import useTogglePassword from "@/hooks/useTogglePassword";
import { Eye, EyeOff } from "lucide-react";
import Spinner from "./Spinner";

const SignupForm: FC = () => {
  const {
    formData,
    handleInput,
    handleImage,
    handleSubmit,
    handleValueChange,
    handleCompanySizeChange,
    loading,
  } = useSignup();
  const { showPassword, handleTogglePassword } = useTogglePassword();
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
              <CardTitle className="text-xl">Signup to continue</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                className="flex flex-col gap-[10px]"
                onSubmit={handleSubmit}
              >
                <div>
                  <Label htmlFor="profilePic">Profile Picture:</Label>
                  <Input
                    type="file"
                    id="profilePic"
                    name="profilePic"
                    onChange={handleImage}
                  />
                </div>
                <div>
                  <Label htmlFor="name">Name:</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    onChange={handleInput}
                  />
                </div>
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
                  <Label htmlFor="occupation">Occupation:</Label>
                  <Select
                    value={formData.occupation}
                    onValueChange={handleValueChange}
                  >
                    <SelectTrigger className="w-full" id="occupation">
                      <SelectValue placeholder="Select occupation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Individual</SelectItem>
                      <SelectItem value="freelancer">Freelancer</SelectItem>
                      <SelectItem value="agency">Agency/Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {formData.occupation === "agency" && (
                  <div>
                    <Label htmlFor="companySize">Company Size:</Label>
                    <Select
                      value={formData.companySize}
                      onValueChange={handleCompanySizeChange}
                    >
                      <SelectTrigger className="w-full" id="companySize">
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">
                          201-500 employees
                        </SelectItem>
                        <SelectItem value="500+">500+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div>
                  <Button
                    className="w-full"
                    type="submit"
                    disabled={
                      !formData.name ||
                      !formData.email ||
                      !formData.password ||
                      !formData.occupation ||
                      loading
                    }
                  >
                    {loading ? <Spinner /> : "Signup"}
                    {/* <Spinner /> */}
                  </Button>
                </div>
              </form>
              <div className="mt-6">
                <Separator />
              </div>
            </CardContent>
            <CardFooter className="text-center">
              <p className="font-semibold">
                Already have a ClientFlow account?{" "}
                <Link
                  to="/login"
                  className="underline font-bold text-indigo-500"
                >
                  Login
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </AuthLayout>
    </>
  );
};

export default SignupForm;
