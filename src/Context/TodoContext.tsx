import * as React from 'react';

import { TodoContextType, ITodo } from '../components/@types/todo';

const TodoContext = React.createContext<TodoContextType | null>(null);

export function useTodo(){
  return React.useContext(TodoContext);
}

export const TodoProvider = (props:any) => {
  const [todos, setTodos] = React.useState<ITodo>({
    id: 1,
    task: 'Tasks List',
    status: false,
    todo:[]
    });
  
  const updateTodo = (item:ITodo) => {
    let tree=updateTree(item.id,item,todos)
    setTodos({...tree})    
  };

  const deleteTodo=(item:ITodo,index:number)=>{
    let tree=deleteTree(item.id,todos)
    setTodos({...tree})    
  }

  const addTodo=(item:ITodo)=>{
    const id=Math.random()*1000;
    if(item?.todo?.length>0){
      item.todo.push({id: id,task: 'New Task',status: false,todo:[]})
    }else{
      item.todo=[{id: id,task: 'New Task',status: false,todo:[]}]
    }
    let tree=updateTree(item.id,item,todos)
    setTodos({...tree})
  }


  function updateTree(id:number, update:any, tree:any) {
    if (tree.id === id) {
        tree = update
    } else {
      if(tree.todo.length>0)
        tree.todo = tree?.todo?.map(function(item:any) {
            return updateTree(id, update, item)
        })
    }
    return tree
  }
  function deleteTree ( id:number, tree:any) {
    if (tree.id === id) {
      return false
    } else {
      if(tree.todo.length>0)
        tree.todo = tree?.todo?.filter((item:any)=>  deleteTree(id, item))
    } 
  return tree
}

  const value:any={ todos,addTodo, updateTodo ,deleteTodo}
  return (
  <TodoContext.Provider value={value}>  
    {props.children}
  </TodoContext.Provider>
  );
};

export default TodoProvider;
