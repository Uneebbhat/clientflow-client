import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <div className="flex">
        <div className="fixed top-0 left-0 px-[24px] py-[32px] h-[100vh] md:border-r-2">
          <Sidebar />
        </div>
        <div>
          <div className="flex md:hidden">
            <Header />
          </div>
          <div className="md:ml-[280px] p-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
