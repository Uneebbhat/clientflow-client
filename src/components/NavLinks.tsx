import { FC } from "react";
import { Link } from "react-router-dom";
import {
  ChartNoAxesGantt,
  ClipboardList,
  KanbanSquare,
  LayoutDashboard,
  MessageSquareMore,
  PlusCircle,
  Settings,
  Users,
} from "lucide-react";

const NavLinks: FC = () => {
  const routes = [
    {
      path: "/",
      label: "Dashboard",
      icon: <LayoutDashboard />,
    },
    {
      path: "/pipelines",
      label: "Pipelines",
      icon: <KanbanSquare />,
    },
    {
      path: "/team",
      label: "Team",
      icon: <Users />,
    },
    {
      path: "/manage-clients",
      label: "Manage Clients",
      icon: <ChartNoAxesGantt />,
    },
    {
      path: "/bucket",
      label: "Bucket",
      icon: <PlusCircle />,
    },
    {
      path: "/chat",
      label: "Chat",
      icon: <MessageSquareMore />,
    },
    {
      path: "/launchpad",
      label: "Launchpad",
      icon: <ClipboardList />,
    },
    {
      path: "/settings",
      label: "Settings",
      icon: <Settings />,
    },
  ];
  return (
    <>
      <nav className="flex flex-col gap-[10px]">
        {routes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className={`px-[12px] py-[8px] flex items-center gap-[12px] rounded-sm hover:bg-indigo-500 hover:text-white font-semibold transition-all ${
              location.pathname === route.path
                ? "bg-indigo-500 text-white"
                : "bg-lightgray-500"
            }`}
          >
            {route.icon}
            {route.label}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default NavLinks;
