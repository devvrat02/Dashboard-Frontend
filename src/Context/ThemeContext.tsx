import React,{ useContext,useState} from "react";
import { Toaster } from "react-hot-toast";
import notify from "../components/notify";
import Loader from "../components/Loader";
const ThemeContext=React.createContext(null);
// auth context
export function useTheme(){
  return useContext(ThemeContext);
}

export function ThemeProvider(props:any){
  const [loading,setLoading]=useState(false)
  const tempLoader=()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2000)
  }
  const value:any={
    notify,
    loading,
    setLoading,
    tempLoader
  }
  return (
    <ThemeContext.Provider value={value}>
       <Toaster/>
       <Loader loading={loading}/>
      {props.children}
    </ThemeContext.Provider>
  )
}

