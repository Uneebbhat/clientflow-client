import SignupForm from "@/components/Auth/SignupForm";
import useChangeTitle from "@/utils/useChangeTitle";
import { FC } from "react";

const SignupPage: FC = () => {
  useChangeTitle("ClientFlow | Signup");

  return (
    <>
      <SignupForm />
    </>
  );
};

export default SignupPage;
