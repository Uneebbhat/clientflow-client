import ResetPasswordForm from "@/components/Auth/ResetPasswordForm";
import useChangeTitle from "@/utils/useChangeTitle";
import { FC } from "react";

const ResetPasswordPage: FC = () => {
  useChangeTitle("ClientFlow | Reset Password");
  return (
    <>
      <ResetPasswordForm />
    </>
  );
};

export default ResetPasswordPage;
