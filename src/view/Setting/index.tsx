import { useForm,Controller} from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { updateUser } from "../../reducers/settingSlice";
import { useEffect } from "react";
import { useTheme } from "../../Context/ThemeContext";

function Setting() {
    const {notify,setLoading}:any=useTheme()
    const defaultValues = {
        FirstName:'',
        LastName:'',
      }
    // form handeling
    const {
        control,
        handleSubmit,
        setValue,
        formState: {isDirty,isValid },
      } = useForm({defaultValues})
    const dispatch=useDispatch<AppDispatch>()
    const editUser=(e:any)=>{
        let credentials:any={
             first_name:e.FirstName, 
             last_name :e.LastName
            }
            setLoading(true)
    dispatch(updateUser(credentials)).unwrap().then(
        (res:any)=>{
            setLoading(false)
            notify({title:"Detail Updated"} )
    }
    ).catch((e:any)=>{
        setLoading(false)
        notify({title:"Detail Not Updated Error",message:`Reason: ${e}`,success:false} )
        console.log(e)
    })
    }
    const {user}:any=useSelector((state:any)=>state.auth)
    useEffect(()=>{
        setValue('FirstName',user?.first_name)
        setValue('LastName',user?.last_name)
    },[setValue,user])   
    return ( 
        <div className="w-full m-auto ">
            <div className=" font-medium text-lg w-11/12 m-auto mt-2">Settings/ Update Profile </div>
            <div className="w-11/12 m-auto bg-white p-4">   
                <div className="w-full sm:w-6/12 md:w-4/12">
                        <div className="pt-2">    
                        <Controller
                            name="FirstName"
                            control={control}
                            rules={{ required: 'Please enter User Id.' }}
                            render={({ field,fieldState }) => (
                                <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    {field.name}
                                </label>
                                <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${fieldState.error?`border-red-500`:``}`} id="username" type="text" placeholder={field.name} onChange={field.onChange} value={field.value}/>
                                <p className="text-red-500 text-xs ">{`${fieldState.error?fieldState.error.message:`  `}`}</p>
                            </div>
                            )}/>
                        </div>
                        <div>
                            <Controller
                                name="LastName"
                                control={control}
                                rules={{ required: 'Please enter Last Name.' }}
                                render={({ field,fieldState }) => (
                                    <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        {field.name}
                                    </label>
                                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${fieldState.error?`border-red-500`:``}`} id="pass" type="string" placeholder={field.name} onChange={field.onChange} value={field.value}/>
                                    <p className="text-red-500 text-xs">{`${fieldState.error?fieldState.error.message:`  `}`}</p>
                                </div>
                                )}/>
                        </div>
                        <div className="flex items-center w-full m-auto justify-around">
                            <div className={` text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline bg-primary ${!(isDirty&&isValid)&&`hover:animate-pulse`}`} onClick={handleSubmit(editUser)} >
                                Change
                            </div>
                        </div>
                </div>
            </div>
            
        </div>
     );
}

export default Setting;