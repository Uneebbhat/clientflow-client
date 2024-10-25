import { FC } from "react";
import logo from "@/assets/logo.svg";
import NavLinks from "@/components/NavLinks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
        <div className="w-full flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full flex items-start gap-2">
              <div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-left">
                <h2 className="font-semibold">Uneeb Bhatti</h2>
                <p className="text-[14px]">uneebbhatti3@gmail.com</p>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Uneeb Bhatti</DropdownMenuLabel>
              <DropdownMenuLabel className="text-lightgray-900">
                uneebbhatti3@gmail.com
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="cursor-pointer">
            <LogOut size={20} color="red" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
