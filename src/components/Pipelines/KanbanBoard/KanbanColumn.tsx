import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Column } from "@/types";
import TaskCard from "./TaskCard";
import { Plus, MoreHorizontal } from "lucide-react";

interface KanbanColumnProps {
  column: Column;
  onAddTask: (columnId: string) => void;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ column, onAddTask }) => (
  <Droppable droppableId={column.id}>
    {(provided) => (
      <div
        {...provided.droppableProps}
        ref={provided.innerRef}
        className="bg-white rounded-lg shadow-lg p-4"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">{column.title}</h2>
          <MoreHorizontal className="text-gray-400" />
        </div>
        <button
          onClick={() => onAddTask(column.id)}
          className="flex items-center text-blue-500 mb-4"
        >
          <Plus className="mr-2" /> Add New Task
        </button>
        <div className="space-y-4">
          {column.tasks.map((task, index) => (
            <TaskCard key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      </div>
    )}
  </Droppable>
);

export default KanbanColumn;
