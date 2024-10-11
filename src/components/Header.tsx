import { FC } from "react";
import logo from "@/assets/logo.svg";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavLinks from "@/components/NavLinks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoIcon from "@/assets/logo-icon.svg";

const Header: FC = () => {
  return (
    <header className="p-4 flex items-center justify-between w-full">
      <div>
        <img src={logoIcon} alt="ClientFlow" width={50} />
      </div>
      <div className="flex items-center gap-4">
        <div className="cursor-pointer">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <div>
                <div>
                  <img src={logo} alt="ClientFlow" />
                </div>
                <div className="mt-[24px]">
                  <NavLinks />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
