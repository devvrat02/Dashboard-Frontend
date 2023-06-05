export interface ITodo {
    id: number;
    task: string;
    status: boolean;
    todo:ITodo[]
  }
  
  export type TodoContextType = {
    todos: ITodo[];
    addTodo: (todo: ITodo) => void;
    updateTodo: (id: number) => void;
    deleteTodo:(id: number) => void
  };
  