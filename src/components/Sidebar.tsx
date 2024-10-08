import { FC } from "react";
import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";

const Sidebar: FC = () => {
  return (
    <>
      <div>
        <div className="bg-slate-500">
          <img src={logo} alt="ClientFlow" />
        </div>
        <div className="mt-[24px]">
          <nav className="flex flex-col">
            <Link
              to={"/"}
              className="bg-slate-500 px-[12px] py-[8px] rounded-sm"
            >
              Dashboard
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
