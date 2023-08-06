import React,{useState,useEffect, useContext} from "react";

const AuthContext=React.createContext(null);
// auth context
export function useAuth(){
  return useContext(AuthContext);
}

export function AuthProvider(props:any){
  const [authUser,setAuthUser]=useState<any>({})
  const [isLoggedIn,setisLoggedIn]=useState(true)
  let token=localStorage.getItem('dash-token');
  useEffect(() => {
    if(token){
      setisLoggedIn(true)
    }else{
      setisLoggedIn(false)
    }
  },[setAuthUser,setisLoggedIn,token])
  const value:any={
    authUser,
    setAuthUser,
    isLoggedIn, 
    setisLoggedIn,
  }
  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}

