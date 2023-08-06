import {PiBellLight} from "react-icons/pi"
import { faker } from '@faker-js/faker';
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from 'react'
import { authentication } from "../../reducers/authSlice";
function Header() {
    const {user}:any=useSelector((state:any)=>state.auth)
    const dispatch=useDispatch<any>()
    useEffect(() => {
        dispatch(authentication()).then().catch((e:any)=>{console.log(e)})
    }, [dispatch])
    
    return (
    <div>
        <nav className="border-gray-200 bg-white">
                <div className="flex flex-col md:flex-row flex-wrap items-center justify-between  p-4">
                    <div className=" font-medium text-primary cursor-pointer mb-2">Welcome, {user?.first_name+` `+user?.last_name}</div>
                    <div className="flex flex-row items-center gap-2">
                        <div className="px-2 cursor-pointer">   
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 " placeholder="Search" />
                            </div>
                        </div>
                        <div className="px-2 cursor-pointer">
                            <PiBellLight size={'1.6rem'}/>
                        </div>
                        <div className="px-2 cursor-pointer">
                         <img className="w-10 h-10 rounded-full" src={faker.image.avatar()} alt="Rounded avatar"/>
                        </div>    
                    </div>      
                </div>
            </nav>
    </div>
    );
}

export default Header;