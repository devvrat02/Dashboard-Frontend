export interface ITodo {
    id: number;
    task: string;
    status: boolean;
    todo:ITodo[]
  }
  // definying todo type
  export type TodoContextType = {
    todos: ITodo[];
    addTodo: (todo: ITodo) => void;
    updateTodo: (id: number) => void;
    deleteTodo:(id: number) => void
  };
  