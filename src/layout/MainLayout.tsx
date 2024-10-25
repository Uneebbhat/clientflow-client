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
        <div className="bg-white border-r-2 md:px-[24px] py-[32px] h-[100vh] relative flex-shrink-0">
          <div className="sticky top-0">
            <Sidebar />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto h-[100vh]">
          <div className="block md:hidden">
            <Header />
          </div>
          <div className="px-[16px] md:px-[24px] py-[32px]">{children}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
