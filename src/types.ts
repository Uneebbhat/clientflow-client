export type Task = {
  id: string;
  title: string;
  description: string;
  assignees: string[];
  comments: number;
};

export type Column = {
  id: string;
  title: string;
  tasks: Task[];
};
