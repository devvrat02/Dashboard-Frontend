import { Outlet, useLocation } from "react-router-dom";
import Analytics from "../Analytics";
import {Header,Sidebar} from "../../components";
import style from './style.module.css'
import {useState,useEffect} from 'react'
import { useTheme } from "../../Context/ThemeContext";

function Dashboard() {
    const location = useLocation();
    const [showSidebar,setShowSidebar]=useState(false)
    const {tempLoader}:any=useTheme();
    useEffect(() => {
        tempLoader()
        // eslint-disable-next-line
    }, [location])
    

    return ( 
    <div className="flex  bg-screenbg overflow-hidden  w-full ">
        <div className="fixed top-2 left-2 sm:hidden z-20">
        <button className="relative group" onClick={()=>{setShowSidebar(x=>!x)}}>
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all bg-primary ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                {!showSidebar&&<div className="flex flex-col justify-between w-[15px] h-[15px] transform transition-all origin-center overflow-hidden">
                    <div className="space-y-1">
                    <div className="w-5 h-0.5 bg-white"></div>
                    <div className="w-5 h-0.5 bg-white"></div>
                    <div className="w-5 h-0.5 bg-white"></div>
                    </div>
                </div>}
                {showSidebar&&<div className="flex flex-col justify-between w-[15px] h-[15px] transform transition-all origin-center overflow-hidden">
                        <div className="absolute items-center justify-between  top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                        <div className="absolute bg-white h-[2px] w-5  rotate-0 delay-300 group-focus:rotate-45"></div>
                        <div className="absolute bg-white h-[2px] w-5  -rotate-0 delay-300 group-focus:-rotate-45"></div>
                       </div>
                    </div>
                }
             </div>
        </button>
        </div>
        <div className="flex flex-row w-full">
            <div className={`flex ${style[`sidebar`]} sm:w-5/12 md:w-4/12 lg:w-3/12 xl:w-2/12 h-screen ${showSidebar?``:style[`hidesb`]}`} >
                <Sidebar hider={setShowSidebar}/>
            </div>
            <div className='w-full '>            
                <div className="">
                <Header/>
                </div>
                <div className="sm:relative">
                    <div className="absolute bg-screenbg w-full overflow-scroll"style={{height:'96vh'}}>
                        {
                            location.pathname==="/" ? <Analytics />:
                            <Outlet />
                        }
                    </div>
                </div>
            </div>
        </div>
    </div> 
    );
}

export default Dashboard;