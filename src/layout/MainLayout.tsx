import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <div className="flex">
        <aside className="max-w-full fixed top-p left-0 px-[16px] py-[32px]">
          <Sidebar />
        </aside>
        <section className="w-full bg-slate-400 ml-[280px]">{children}</section>
      </div>
    </>
  );
};

export default MainLayout;
