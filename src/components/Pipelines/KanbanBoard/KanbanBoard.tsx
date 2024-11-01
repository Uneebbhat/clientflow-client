import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Column } from "@/types";
import KanbanColumn from "./KanbanColumn";

const initialColumns: { [key: string]: Column } = {
  todo: {
    id: "todo",
    title: "To Do",
    tasks: [
      {
        id: "1",
        title: "Wireframing",
        description: "Create low-fidelity designs that outline the layout.",
        assignees: [
          "https://i.pravatar.cc/30?u=1",
          "https://i.pravatar.cc/30?u=2",
        ],
        comments: 4,
      },
    ],
  },
  "in-progress": {
    id: "in-progress",
    title: "In Progress",
    tasks: [
      {
        id: "2",
        title: "Customer Journey Mapping",
        description: "Identify key pain points and touchpoints.",
        assignees: ["https://i.pravatar.cc/30?u=3"],
        comments: 3,
      },
    ],
  },
  "need-review": {
    id: "need-review",
    title: "Need Review",
    tasks: [],
  },
  done: {
    id: "done",
    title: "Done",
    tasks: [
      {
        id: "3",
        title: "Branding, visual identity",
        description: "Develop a brand identity system.",
        assignees: ["https://i.pravatar.cc/30?u=4"],
        comments: 1,
      },
    ],
  },
};

const KanbanBoard: React.FC = () => {
  const [columns, setColumns] = useState<{ [key: string]: Column }>(
    initialColumns
  );

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const [movedTask] = sourceColumn.tasks.splice(source.index, 1);

    destColumn.tasks.splice(destination.index, 0, movedTask);

    setColumns({
      ...columns,
      [sourceColumn.id]: sourceColumn,
      [destColumn.id]: destColumn,
    });
  };

  const addNewTask = (columnId: string) => {
    const newTask = {
      id: Date.now().toString(),
      title: "New Task",
      description: "Task description",
      assignees: ["https://i.pravatar.cc/30?u=new"],
      comments: 0,
    };

    setColumns((prevColumns) => ({
      ...prevColumns,
      [columnId]: {
        ...prevColumns[columnId],
        tasks: [...prevColumns[columnId].tasks, newTask],
      },
    }));
  };

  return (
    <div className="mt-[24px] min-h-screen">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="overflow-x-auto">
          <div className="flex gap-6 min-w-max">
            {Object.values(columns).map((column) => (
              <div key={column.id} className="w-64">
                <KanbanColumn column={column} onAddTask={addNewTask} />
              </div>
            ))}
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;
