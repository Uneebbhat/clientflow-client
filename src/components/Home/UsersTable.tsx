import { FC } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Role = "Admin" | "Member" | "Manager" | "Guest";
type Status = "Active" | "Inactive";

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

const getRoleStyle = (role: Role) => {
  return roleStyles[role] || "bg-gray-200 text-gray-800";
};

const getStatusStyle = (status: Status) => {
  return statusStyles[status] || "text-gray-800 bg-gray-200";
};

const UsersTable: FC = () => {
  const users = [
    {
      id: 1,
      name: "Uneeb Bhatti",
      email: "uneebbhatti3@gmail.com",
      role: "Admin" as Role,
      joinDate: "2023-01-15",
      status: "Active" as Status,
    },
    {
      id: 2,
      name: "Umar",
      email: "umar@gmail.com",
      role: "Manager" as Role,
      joinDate: "2023-02-20",
      status: "Active" as Status,
    },
    {
      id: 3,
      name: "Zubair",
      email: "zubair@gmail.com",
      role: "Member" as Role,
      joinDate: "2023-02-20",
      status: "Active" as Status,
    },
    // New users added
    {
      id: 4,
      name: "Aisha",
      email: "aisha@gmail.com",
      role: "Member" as Role,
      joinDate: "2023-03-15",
      status: "Inactive" as Status,
    },
    {
      id: 5,
      name: "Ali",
      email: "ali@gmail.com",
      role: "Guest" as Role,
      joinDate: "2023-04-10",
      status: "Active" as Status,
    },
  ];

  return (
    <Table>
      <TableCaption>See all of your team members</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Join Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.id}</TableCell>
            <TableCell className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {user.name}
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <span
                className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getRoleStyle(
                  user.role
                )}`}
              >
                {user.role}
              </span>
            </TableCell>
            <TableCell>{user.joinDate}</TableCell>
            <TableCell>
              <div className="flex items-center">
                <span
                  className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getStatusStyle(
                    user.status
                  )}`}
                >
                  <div
                    className={`h-2 w-2 rounded-full ${
                      user.status === "Active" ? "bg-green-600" : "bg-red-600"
                    } mr-1`}
                  ></div>
                  {user.status}
                </span>
              </div>
            </TableCell>
            <TableCell className="cursor-pointer">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <DotsVerticalIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
