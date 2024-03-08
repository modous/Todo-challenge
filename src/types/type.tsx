interface ITodoItem {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
}

type IAddTodoItemData = Pick<ITodoItem, "title" | "completed">;
