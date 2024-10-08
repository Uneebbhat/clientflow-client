import ForgotPasswordForm from "@/components/ForgotPasswordForm";
import useChangeTitle from "@/hooks/useChangeTitle";
import { FC } from "react";

const ForgotPasswordPage: FC = () => {
  useChangeTitle("ClientFlow | Forgot Password");
  return (
    <>
      <ForgotPasswordForm />
    </>
  );
};

export default ForgotPasswordPage;
