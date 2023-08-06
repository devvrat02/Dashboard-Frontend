import { useForm,Controller} from "react-hook-form"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../reducers/authSlice";
import { AppDispatch } from "../../store";
import { useAuth } from "../../Context/AuthContext";
import { useTheme } from "../../Context/ThemeContext";
// Signup Screen
const Signup=()=>{
    const {setAuthUser}:any=useAuth()
    const {notify,setLoading}:any=useTheme()
    const defaultValues = {
        Firstname: '',
        Lastname:'',
        Email:'',
        Password: '',
      }
    // form handeling
    const {
        control,
        handleSubmit,
        formState: {isDirty,isValid },
      } = useForm({defaultValues})
    const navigate = useNavigate();
    const dispatch=useDispatch<AppDispatch>()
    const signInUser=(e:any)=>{
        let credentials:any={
                first_name:e.Firstname, 
                 last_name:e.Lastname, 
                 email:e.Email, 
                 password :e.Password
                }
        setLoading(true)
        dispatch(register(credentials)).unwrap().then(
            (res:any)=>{
                setAuthUser(res)
                notify({title:"Register Success"} )
                setLoading(false)
                return navigate("/");}).catch((e:any)=>{
            console.log(e)
            setLoading(false)
            notify({title:"Register Error",message:`Reason: ${e}`,success:false} )
        })
    }
    return ( 
        <div className="flex w-full bg-primary h-screen">
            <div className="sm:w-10/12 xl:w-5/6 m-auto xl:my-48 lg:my-36 ">
                <div className="sm:w-4/5 md:w-10/12 lg:w-8/12 xl:w-4/12 2xl:w-w-4/12 m-auto flex justify-start text-4xl text-white font-bold mb-2">
                    Branding 
                </div>
                <div className="shadow-outline sm:w-4/5 md:w-10/12 lg:w-8/12 xl:w-4/12 2xl:w-w-4/12 m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="flex w-full items-center  text-xl font-extrabold ">
                            Signup
                        </div>
                        <div className="pt-2">    
                        <Controller
                            name="Email"
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
                        <div className="pt-2">    
                        <Controller
                            name="Firstname"
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
                        <div className="pt-2">    
                        <Controller
                            name="Lastname"
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
                                name="Password"
                                control={control}
                                rules={{ required: 'Please enter Password.' }}
                                render={({ field,fieldState }) => (
                                    <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        {field.name}
                                    </label>
                                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${fieldState.error?`border-red-500`:``}`} id="pass" type="password" placeholder={field.name} onChange={field.onChange} value={field.value}/>
                                    <p className="text-red-500 text-xs">{`${fieldState.error?fieldState.error.message:`  `}`}</p>
                                </div>
                                )}/>
                        </div>
                        <div className="flex items-center w-full m-auto justify-around">
                            <div className={` text-black font-bold py-2 px-4  focus:outline-none focus:shadow-outline  `} onClick={()=>{navigate('/login')}} >
                                login
                            </div>
                            <div className={` text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline hover:animate-pulse ${(isDirty&&isValid)?`bg-primary hover:bg-grey hover:text-white`:`hover:bg-grey bg-primary text-white hover:bg-secondary`} `} onClick={handleSubmit(signInUser)}>
                                Sign Up   
                            </div>
                        </div>
                </div>
            </div> 
        </div> 
    );
}

export default Signup;