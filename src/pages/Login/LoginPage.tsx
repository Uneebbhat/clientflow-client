import LoginForm from "@/components/Auth/LoginForm";
import useChangeTitle from "@/hooks/useChangeTitle";
import { FC } from "react";

const LoginPage: FC = () => {
  useChangeTitle("ClientFlow | Login");

  return (
    <>
      <LoginForm />
    </>
  );
};

export default LoginPage;
