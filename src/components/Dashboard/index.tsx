import { useAuth } from "../../Context/AuthContext";
import Login from '../Login';
import Todo from './Todo';

function Dashboard() {
    // dashboard for authenticating and display element
    const {authUser,setAuthUser,isLoggedIn,setisLoggedIn,authentication}:any=useAuth();
    const logInUser =(e:any)=>{
        let resp=authentication(e)
        if(resp){
            setisLoggedIn(true)
        }
    }
    const logout =(e:any)=>{
        e.preventDefault()
        setisLoggedIn(false)
        setAuthUser({})
        localStorage.removeItem('token')
        alert('User is logout and token is deleted')
    }
    return ( 
    <div>
        <div className=''>            
            <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <div className=" text-slate-200 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <span>User is {isLoggedIn?'Logged-In':'Logged-out'}</span>
                    {isLoggedIn?(<span>User Name :  {authUser?.Name}</span>):<span>No User</span>}
                    {
                        isLoggedIn?<div className='p-2 bg-orange-400 rounded-full' onClick={logout}>logout</div>:
                        <div className='p-2 bg-orange-400 rounded-full' onClick={logInUser}>Login</div>
                    }
                </div>
            </nav>
        </div>
       

        {!isLoggedIn?<Login logInUser={logInUser}/>:<Todo/>}
    </div> 
    );
}

export default Dashboard;