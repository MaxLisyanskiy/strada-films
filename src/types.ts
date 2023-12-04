export interface AppInputProps {
  onAddNewTask: (text: string) => void;
}

export interface Task {
  id: string;
  text: string;
  isDone: boolean;
}

export type ListCategory = 'plan' | 'ready';

export interface ListProps {
  tasks: Task[];
  onDelete: (id: string, category: ListCategory) => void;
  onChangeIsDone: (id: string, category: ListCategory) => void;
}

export interface PlanListProps extends ListProps {
  onChange: (id: string, text: string) => void;
}

export interface PlanItemProps {
  task: Task;
  onDelete: (id: string, category: ListCategory) => void;
  onChange: (id: string, text: string) => void;
  onChangeIsDone: (id: string) => void;
}
