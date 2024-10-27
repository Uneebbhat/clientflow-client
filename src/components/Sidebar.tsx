import { FC } from "react";
import logo from "@/assets/logo.svg";
import NavLinks from "@/components/NavLinks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Sidebar: FC = () => {
  return (
    <>
      <div className="hidden md:flex flex-col justify-between h-[90vh]">
        <div>
          <div>
            <img src={logo} alt="ClientFlow" />
          </div>
          <div className="mt-[24px]">
            <NavLinks />
          </div>
        </div>
        <div className="w-full flex items-center gap-2 bg-lightgray-500 px-2 py-2 rounded-full">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2">
              <div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-left">
                <h2 className="font-semibold text-[16px]">Uneeb Bhatti</h2>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
