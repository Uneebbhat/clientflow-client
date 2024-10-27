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
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Calendar } from "@/components/ui/calendar";

interface User {
  name: string;
  image: string;
}

const staticUsers: User[] = [
  { name: "Alice", image: "/images/alice.jpg" },
  { name: "Bob", image: "/images/bob.jpg" },
  { name: "Charlie", image: "/images/charlie.jpg" },
];

type Priority = "High" | "Urgent" | "Low";
type Status = "In Progress" | "Completed" | "Pending";

const priorityOptions: Priority[] = ["High", "Urgent", "Low"];
const statusOptions: Status[] = ["In Progress", "Completed", "Pending"];

const priorityStyles: Record<Priority, string> = {
  High: "bg-yellow-200 text-yellow-800",
  Urgent: "bg-red-200 text-red-800",
  Low: "bg-gray-200 text-gray-800",
};

const statusStyles: Record<Status, string> = {
  "In Progress": "bg-blue-200 text-blue-800",
  Completed: "bg-green-200 text-green-800",
  Pending: "bg-gray-200 text-gray-800",
};

const DeadlinesTableEditModal: FC<{ onClose: () => void }> = ({ onClose }) => {
  const [priority, setPriority] = useState<Priority>("High");
  const [status, setStatus] = useState<Status>("In Progress");
  const [isPriorityOpen, setIsPriorityOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [assignedUsers, setAssignedUsers] = useState<User[]>([]);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handlePriorityChange = (value: Priority) => {
    setPriority(value);
    setIsPriorityOpen(false);
  };

  const handleStatusChange = (value: Status) => {
    setStatus(value);
    setIsStatusOpen(false);
  };

  const handleUserToggle = (user: User) => {
    setAssignedUsers((prevUsers) =>
      prevUsers.some((u) => u.name === user.name)
        ? prevUsers.filter((u) => u.name !== user.name)
        : [...prevUsers, user]
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-[500px] max-w-full mx-4 h-[80vh] overflow-scroll">
        <CardHeader>
          <CardTitle>Edit Task</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <Label htmlFor="taskTitle">Task Title:</Label>
              <Input
                type="text"
                name="taskTitle"
                id="taskTitle"
                value="Website Launch"
                placeholder="Website Launch"
                readOnly
              />
            </div>
            {/* Priority Dropdown */}
            <div className="mb-4 relative">
              <Label>Priority:</Label>
              <div
                className="flex items-center px-4 py-2 border rounded-md cursor-pointer mt-1"
                onClick={() => setIsPriorityOpen(!isPriorityOpen)}
              >
                <span
                  className={`px-2 py-1 rounded-full text-sm font-medium ${priorityStyles[priority]}`}
                >
                  {priority}
                </span>
                <ChevronDownIcon className="ml-auto" />
              </div>
              {isPriorityOpen && (
                <div className="absolute top-full mt-2 w-full bg-white border rounded-md shadow-md z-10">
                  {priorityOptions.map((option) => (
                    <div
                      key={option}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
                      onClick={() => handlePriorityChange(option)}
                    >
                      <span
                        className={`px-2 py-1 rounded-full text-sm font-medium ${priorityStyles[option]}`}
                      >
                        {option}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Status Dropdown */}
            <div className="mb-4 relative">
              <Label>Status:</Label>
              <div
                className="flex items-center px-4 py-2 border rounded-md cursor-pointer mt-1"
                onClick={() => setIsStatusOpen(!isStatusOpen)}
              >
                <span
                  className={`px-2 py-1 rounded-full text-sm font-medium ${statusStyles[status]}`}
                >
                  {status}
                </span>
                <ChevronDownIcon className="ml-auto" />
              </div>
              {isStatusOpen && (
                <div className="absolute top-full mt-2 w-full bg-white border rounded-md shadow-md z-10">
                  {statusOptions.map((option) => (
                    <div
                      key={option}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
                      onClick={() => handleStatusChange(option)}
                    >
                      <span
                        className={`px-2 py-1 rounded-full text-sm font-medium ${statusStyles[option]}`}
                      >
                        {option}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Assigned Users Dropdown */}
            <div className="mb-4 relative">
              <Label>Assigned Users:</Label>
              <div
                className="flex items-center px-4 py-2 border rounded-md cursor-pointer mt-1"
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              >
                <span>
                  {assignedUsers.length > 0
                    ? assignedUsers.map((user) => user.name).join(", ")
                    : "Select Users"}
                </span>
                <ChevronDownIcon className="ml-auto" />
              </div>
              {isUserDropdownOpen && (
                <div className="absolute top-full mt-2 w-full bg-white border rounded-md shadow-md z-10">
                  {staticUsers.map((user) => (
                    <div
                      key={user.name}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
                      onClick={() => handleUserToggle(user)}
                    >
                      <input
                        type="checkbox"
                        checked={assignedUsers.some(
                          (u) => u.name === user.name
                        )}
                        readOnly
                        className="mr-2"
                      />
                      <Avatar className="w-6 h-6 mr-2">
                        <AvatarImage src={user.image} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span>{user.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="destructive" onClick={onClose}>
            Cancel
          </Button>
          <Button className="ml-2">Save</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DeadlinesTableEditModal;
