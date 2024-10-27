import { FC, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

type Role = "Admin" | "Member" | "Manager" | "Guest";
type Status = "Active" | "Inactive";

const roleOptions: Role[] = ["Admin", "Member", "Manager", "Guest"];
const statusOptions: Status[] = ["Active", "Inactive"];

const roleStyles = {
  Admin: "bg-yellow-200 text-yellow-800",
  Member: "bg-green-200 text-green-800",
  Manager: "bg-blue-200 text-blue-800",
  Guest: "bg-gray-200 text-gray-800",
};

const statusStyles = {
  Active: "text-green-800 bg-green-200",
  Inactive: "text-red-800 bg-red-200",
};

interface UsersTableEditModalProps {
  onClose: () => void;
}

const UsersTableEditModal: FC<UsersTableEditModalProps> = ({ onClose }) => {
  const [selectedRole, setSelectedRole] = useState<Role | null>("Admin");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<Status | null>("Active");
  const [isDropdownStatusOpen, setIsDropdownStatusOpen] = useState(false);

  const handleRoleChange = (role: Role) => {
    setSelectedRole(role);
    setIsDropdownOpen(false);
  };

  const handleStatusChange = (status: Status) => {
    setSelectedStatus(status);
    setIsDropdownStatusOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-[500px] max-w-full mx-4">
        <CardHeader>
          <CardTitle>Edit User</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="mb-4">
              <Label htmlFor="name">Name:</Label>
              <Input
                name="name"
                id="name"
                type="text"
                placeholder="John Doe"
                value={"Uneeb"}
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="email">Email:</Label>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                value={"uneebbhatti@gmail.com"}
              />
            </div>

            <div className="mb-4 relative">
              <Label>Role:</Label>
              <div
                className="flex items-center px-4 py-2 border rounded-md cursor-pointer mt-1"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedRole ? (
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-medium ${roleStyles[selectedRole]}`}
                  >
                    {selectedRole}
                  </span>
                ) : (
                  <span className="text-gray-400">Select a role</span>
                )}
                <ChevronDownIcon className="ml-auto" />
              </div>

              {isDropdownOpen && (
                <div className="absolute top-full mt-2 w-full bg-white border rounded-md shadow-md z-10">
                  {roleOptions.map((role) => (
                    <div
                      key={role}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center gap-2"
                      onClick={() => handleRoleChange(role)}
                    >
                      <span
                        className={`px-2 py-1 rounded-full text-sm font-medium ${roleStyles[role]}`}
                      >
                        {role}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-4 relative">
              <Label>Status:</Label>
              <div
                className="flex items-center px-4 py-2 border rounded-md cursor-pointer mt-1"
                onClick={() => setIsDropdownStatusOpen(!isDropdownStatusOpen)}
              >
                {selectedStatus ? (
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-medium ${statusStyles[selectedStatus]}`}
                  >
                    {selectedStatus}
                  </span>
                ) : (
                  <span className="text-gray-400">Select status</span>
                )}
                <ChevronDownIcon className="ml-auto" />
              </div>

              {isDropdownStatusOpen && (
                <div className="absolute top-full mt-2 w-full bg-white border rounded-md shadow-md z-10">
                  {statusOptions.map((status) => (
                    <div
                      key={status}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center gap-2"
                      onClick={() => handleStatusChange(status)}
                    >
                      <span
                        className={`px-2 py-1 rounded-full text-sm font-medium ${statusStyles[status]}`}
                      >
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </form>
        </CardContent>
        <CardFooter className="float-right">
          <Button className="mx-2" variant={"destructive"} onClick={onClose}>
            Cancel
          </Button>
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UsersTableEditModal;
