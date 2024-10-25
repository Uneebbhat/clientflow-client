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
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DeadlinesTable: FC = () => {
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

  return (
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
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
              Website Launch faskfjlasflksad;fjsnfklewfiowfdasnflkasnklfnao;
              knfkln;asofnl;kn
            </TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>ABC Corp</TableCell>
            <TableCell>{getPriorityChip("High")}</TableCell>
            <TableCell>{getStatusChip("In Progress")}</TableCell>
            <TableCell>Oct 20, 2024</TableCell>
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

          <TableRow>
            <TableCell className="font-medium max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
              App Redesign
            </TableCell>
            <TableCell>Jane Smith</TableCell>
            <TableCell>XYZ Ltd</TableCell>
            <TableCell>{getPriorityChip("Urgent")}</TableCell>
            <TableCell>{getStatusChip("Completed")}</TableCell>
            <TableCell>Oct 25, 2024</TableCell>
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

          <TableRow>
            <TableCell className="font-medium max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
              App Redesign
            </TableCell>
            <TableCell>Jane Smith</TableCell>
            <TableCell>XYZ Ltd</TableCell>
            <TableCell>{getPriorityChip("Low")}</TableCell>
            <TableCell>{getStatusChip("Todo")}</TableCell>
            <TableCell>Oct 25, 2024</TableCell>
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
        </TableBody>
      </Table>
    </div>
  );
};

export default DeadlinesTable;
