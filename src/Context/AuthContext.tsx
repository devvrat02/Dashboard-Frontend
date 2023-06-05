import React,{useState,useEffect, useContext} from "react";
import Users from './Users.json'
const AuthContext=React.createContext(null);

export function useAuth(){
  return useContext(AuthContext);
}

export function AuthProvider(props:any){
  const [authUser,setAuthUser]=useState({Name:''})
  const [isLoggedIn,setisLoggedIn]=useState(false)
  useEffect(() => {
    let token=localStorage.getItem('token');
    if(token){
      let user =JSON.parse(token)
      const chk=(x:any)=>{
        if(x.JWT===user.JWT){
          return true
        }
      }
      let res=Users.find(chk)
      setisLoggedIn(true)
      console.log(res)
      setAuthUser({Name:`${res?.UserId}`})
    }else{
        setisLoggedIn(false)
    }

},[setAuthUser,setisLoggedIn])
  const authentication=(user:any)=>{
    const chk=(x:any)=>{
      if(x.UserId===user.UserId&&x.Password===user.Password){
        return true
      }
    }
    let res=Users.find(chk)
    if(res){
      setAuthUser({Name:`${res?.UserId}`})
      localStorage.setItem('token',JSON.stringify(res))
    }else{
      alert('Invalid User')
    }
    return res
  } 
  const value:any={
    authUser,
    setAuthUser,
    isLoggedIn,
    setisLoggedIn,
    authentication,
  }
  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}

