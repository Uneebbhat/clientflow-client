import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Task } from "@/types";
import { MessageCircle } from "lucide-react";

interface TaskCardProps {
  task: Task;
  index: number;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, index }) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided) => (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        className="bg-gray-50 rounded-lg p-4 shadow-md"
      >
        <h3 className="font-medium text-base mb-2">{task.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{task.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex -space-x-2">
            {task.assignees.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt="Assignee"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            ))}
          </div>
          <div className="flex items-center text-gray-500">
            <MessageCircle className="mr-1" /> {task.comments}
          </div>
        </div>
      </div>
    )}
  </Draggable>
);

export default TaskCard;
