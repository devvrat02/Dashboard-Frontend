import { useForm,Controller} from "react-hook-form"

const Login=({ logInUser=()=>{}}:any)=>{
    const defaultValues = {
        UserId: '',
        Password: '',
      }
    const {
        control,
        handleSubmit,
        formState: {isDirty,isValid },
      } = useForm({defaultValues})
    
    return ( 
        <div className="flex w-full">
            <div className="sm:w-10/12 xl:w-5/6 m-auto xl:my-48 lg:my-36">
                <div className="sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-2/5 2xl:w-2/5 m-auto flex justify-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500">
                    Authentcate User 
                </div>
                <div className="sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-2/5 2xl:w-2/5 m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="flex w-full items-center justify-center text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500">
                            Login
                        </div>
                        {`Cred: Username=Alpha, Pass=Qwertyuiop@123`}
                        <div>    
                        <Controller
                            name="UserId"
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
                        <div className="flex items-center w-full m-auto justify-center">
                            <div className={` text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  ${(isDirty&&isValid)?`bg-blue-500 hover:bg-blue-700`:`bg-blue-200 hover:bg-blue-300`} `} onClick={handleSubmit(logInUser)}>
                                login
                            </div>
                        </div>
                </div>
            </div> 
        </div> 
    );
}

export default Login;