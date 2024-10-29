import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Banknote,
  BellRing,
  ChartNoAxesGantt,
  Cylinder,
  KanbanSquare,
  LayoutDashboard,
  MessageSquareMore,
  Settings,
  Users,
} from "lucide-react";

const NavLinks: FC = () => {
  const location = useLocation();

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
      isActive: location.pathname.startsWith("/pipelines"),
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
      path: "/notifications",
      label: "Notifications",
      icon: <BellRing />,
    },
    {
      path: "/bucket",
      label: "Bucket",
      icon: <Cylinder />,
    },
    {
      path: "/chat",
      label: "Chat",
      icon: <MessageSquareMore />,
    },
    {
      path: "/cash-flow",
      label: "Cash Flow",
      icon: <Banknote />,
    },
    {
      path: "/settings",
      label: "Settings",
      icon: <Settings />,
    },
  ];

  return (
    <nav className="flex flex-col gap-[10px]">
      {routes.map((route) => (
        <Link
          key={route.path}
          to={route.path}
          className={`px-[12px] py-[8px] flex items-center gap-[12px] rounded-sm hover:bg-indigo-500 hover:text-white font-semibold transition-all ${
            route.isActive || location.pathname === route.path
              ? "bg-indigo-500 text-white"
              : "bg-lightgray-500"
          }`}
        >
          {route.icon}
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
