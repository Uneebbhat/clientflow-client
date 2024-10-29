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
import DeadlinesTableEditModal from "./DeadlinesTableEditModal";
import useToggleModal from "@/utils/useToggleModal";
import useGetPriorityChip from "@/utils/ui/useGetPriorityChip";
import useGetStatusChip from "@/utils/ui/useGetStatusChip";
import useRenderAvatars from "@/utils/ui/useRenderAvatars";

const DeadlinesTable: FC = () => {
  const { openModal, handleToggleModal } = useToggleModal();

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
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deadlines.map((deadline, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {deadline.task}
                </TableCell>
                <TableCell>{useRenderAvatars(deadline.assigned)}</TableCell>
                <TableCell>{deadline.client}</TableCell>
                <TableCell>{useGetPriorityChip(deadline.priority)}</TableCell>
                <TableCell>{useGetStatusChip(deadline.status)}</TableCell>
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
      {openModal && <DeadlinesTableEditModal onClose={handleToggleModal} />}
    </>
  );
};

export default DeadlinesTable;
