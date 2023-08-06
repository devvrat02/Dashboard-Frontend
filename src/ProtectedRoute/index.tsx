import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";


export const ProtectedRoute = ({redirectPath="/login", children}:any) =>{
    const {isLoggedIn}:any=useAuth();
    if(!isLoggedIn) return <Navigate to={redirectPath} replace />
    return children;
}