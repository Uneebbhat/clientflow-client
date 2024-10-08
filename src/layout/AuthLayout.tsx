import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <section className="container mx-auto px-[20px] py-[20px] flex items-center justify-center min-h-screen">
        {children}
      </section>
    </>
  );
};

export default AuthLayout;
