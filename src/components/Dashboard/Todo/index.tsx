import { useTodo } from "../../../Context/TodoContext";
import InputField from "./InputField";
import { ITodo } from '../../@types/todo';
function Todo() {
    const {todos}:any=useTodo();
    let x=0;
    const TaskList=(todos: ITodo,key:number=0):any=> {  
                 return (
                        <div key={key} className="bottom-1 border-t border-gray-200 border-dashed">
                            <InputField todo={todos} editable={x++!==0}/>
                            <div className="pl-4">
                                {todos?.todo?.length>0&&todos.todo.map((todo: ITodo,key:number) =>TaskList(todo,key))}
                             </div>
                        </div>
                    );   
            }

    return (
        <div className="flex w-full">
            <div className="sm:w-10/12 xl:w-5/6 m-auto xl:my-20 lg:my-20">
                <div className="sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-2/5 2xl:w-2/5 m-auto flex justify-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500">
                    User TODO
                </div>
                <div className="sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-2/5 2xl:w-2/5 m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div>  
                        {TaskList(todos)}
                        </div>
                </div>
            </div> 
        </div> 
    );
}




export default Todo;