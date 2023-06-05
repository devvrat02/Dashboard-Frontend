import {useForm,Controller} from 'react-hook-form'
import { Star,Delete,Edit,Save,Cancel,Branch,Add } from '../../../assets';
import {useState} from 'react'
import { useTodo } from '../../../Context/TodoContext';
function InputField({todo,editable}:any) {
    const {addTodo, updateTodo ,deleteTodo}:any=useTodo();

    const defaultValues = {
        task: todo?.task,
        status: false,
      }
    const {
        control,
        handleSubmit,
        formState:{isDirty,isValid},
      } = useForm({defaultValues})
    const [show,setShow]=useState(false);
    const handleAdd=()=>{
        addTodo(todo)
    }
    const handleEdit=(e:any)=>{
        updateTodo({ id: todo.id,task: e.task,status: e.status,todo:todo.todo})
        setShow(false)
    }
    const handledelete=()=>{
        deleteTodo(todo)
        setShow(false)
    }
  
   
    if(!show){
        return ( 
            <div className='flex flex-row items-center place-self-center'>
                <div className='flex flex-row items-center content-center'>
                    <div className='flex flex-row items-center content-center m-1'>
                        <Star height={25} width={25} fill='Gold'/>
                    </div>
                </div>
                <div>      
                      <div className="">
                            <label className="block text-gray-700 text-sm font-bold uppercase">
                                {nullcheck(todo?.task,'Add New Task')}
                            </label>
                    </div>
                </div>
                <div className='flex flex-row items-center content-center'>
                  {todo?.todo?.length>0&&<div className='flex flex-row items-center content-center m-1 ml-2'>
                        <div className=' text-xs'>{todo?.todo?.length}</div>
                        <Branch height={15} width={15} fill='green' />
                    </div>}
                </div>
                <div className='flex flex-row items-center content-center'>
                    {editable&&<div className='flex flex-row items-center content-center m-1 mx-2'>
                        <Edit height={22} width={22} fill='grey' onClick={()=>{setShow(true)}}/>
                    </div>}
                </div>
                <div className='flex flex-row items-center content-center'>
                    <div className='flex flex-row items-center content-center m-1 mx-2'>
                        <Add height={22} width={22} fill='green' onClick={()=>{handleAdd()}}/>
                    </div>
                </div>
                <div className='flex flex-row items-center content-center'>
                 {editable&&<div className='flex flex-row items-center content-center mx-1'>
                        <Delete height={22} width={22} fill='red' onClick={handledelete}/>
                    </div>}
                </div>
            </div>
            );
    }



        return ( 
            <div className='flex flex-row items-center place-self-center my-2'>
                <div className='flex flex-row items-center content-center'>
                    <div className='flex flex-row items-center content-center m-1'>
                        <Cancel height={22} width={22} fill='black' onClick={()=>{setShow(false)}}/>
                    </div>
                </div>
                <div className='flex flex-row items-center content-center '>
                    <Controller
                        name="task"
                        control={control}
                        rules={{
                            required: 'Please enter Task.', 
                            pattern: /^[A-Za-z0-9 ]+$/i 
                        }}
                        render={({ field,fieldState }) => (
                            <div className="">
                            <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${fieldState.error?`border-red-500`:``}`} id="username" type="text" placeholder={field.name} onChange={field.onChange} value={field.value}/>
                            {/* <p className="text-red-500 text-xs ">{`${fieldState.error?fieldState.error.message:`  `}`}</p> */}
                        </div>
                    )}/>
                </div>
                <div className='flex flex-row items-center content-center'>
                    <div className={`flex flex-row items-center content-center mx-2 ${(isDirty&&isValid)?``:` opacity-50`}`} >
                        <Save height={22} width={22} fill='green' onClick={handleSubmit(handleEdit)}/>
                    </div>

                </div>
            </div>
            );

}
function nullcheck(a:any,b:string){
    if(a===null||a===undefined){
        return b
    }else return a
}

export default InputField;