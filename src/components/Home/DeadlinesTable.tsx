import { FC, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DeadlinesTableEditModal from "./DeadlinesTableEditModal";

const DeadlinesTable: FC = () => {
  const [editModal, setEditModal] = useState(false);
  const handleToggleModal = () => {
    setEditModal(!editModal);
  };

  const getPriorityChip = (priority: string) => {
    const color =
      priority === "High"
        ? "bg-yellow-200 text-yellow-800"
        : priority === "Urgent"
        ? "bg-red-200 text-red-800"
        : "bg-gray-200 text-gray-800";

    return (
      <span
        className={`px-2 py-1 rounded-full text-sm font-semibold ${color} whitespace-nowrap`}
      >
        {priority}
      </span>
    );
  };

  const getStatusChip = (status: string) => {
    const color =
      status === "In Progress"
        ? "bg-blue-200 text-blue-800"
        : status === "Completed"
        ? "bg-green-200 text-green-800"
        : "bg-gray-200 text-gray-800";

    return (
      <span
        className={`px-2 py-1 rounded-full text-sm font-semibold ${color} whitespace-nowrap sm:text-xs`}
      >
        {status}
      </span>
    );
  };

  const renderAvatars = (assignedUsers: { name: string; image: string }[]) => {
    const MAX_AVATARS = 3;
    const totalUsers = assignedUsers.length;

    return (
      <div className="flex items-center">
        {assignedUsers.slice(0, MAX_AVATARS).map((user, index) => (
          <Avatar
            key={index}
            className={`-ml-2 ${
              index > 0 ? "z-10" : ""
            } transition-transform w-6 h-6`}
          >
            <AvatarImage src={user.image} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        ))}
        {totalUsers > MAX_AVATARS && (
          <span className="ml-2 text-gray-500">
            +{totalUsers - MAX_AVATARS}
          </span>
        )}
      </div>
    );
  };

  const deadlines = [
    {
      task: "Website Launch",
      assigned: [
        { name: "Uneeb Bhatti", image: "https://github.com/shadcn.png" },
        { name: "Jane Smith", image: "https://github.com/shadcn.png" },
        { name: "Ali", image: "https://github.com/shadcn.png" },
        { name: "Aisha", image: "https://github.com/shadcn.png" },
      ],
      client: "ABC Corp",
      priority: "High",
      status: "In Progress",
      dueDate: "Oct 20, 2024",
    },
    {
      task: "App Redesign",
      assigned: [
        { name: "John Doe", image: "https://github.com/shadcn.png" },
        { name: "Alex", image: "https://github.com/shadcn.png" },
      ],
      client: "XYZ Ltd",
      priority: "Urgent",
      status: "Completed",
      dueDate: "Oct 25, 2024",
    },
  ];

  return (
    <>
      <div className="overflow-x-auto">
        <Table>
          <TableCaption>See all deadline tasks</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Task</TableHead>
              <TableHead>Assigned</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead className="w-[50px]"></TableHead>{" "}
              {/* For dropdown menu */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {deadlines.map((deadline, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {deadline.task}
                </TableCell>
                <TableCell>{renderAvatars(deadline.assigned)}</TableCell>
                <TableCell>{deadline.client}</TableCell>
                <TableCell>{getPriorityChip(deadline.priority)}</TableCell>
                <TableCell>{getStatusChip(deadline.status)}</TableCell>
                <TableCell>{deadline.dueDate}</TableCell>
                <TableCell className="cursor-pointer">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <DotsVerticalIcon />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={handleToggleModal}>
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {editModal && <DeadlinesTableEditModal onClose={handleToggleModal} />}
    </>
  );
};

export default DeadlinesTable;
