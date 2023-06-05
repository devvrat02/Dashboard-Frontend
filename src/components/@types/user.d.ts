export interface IUser {
    id: number;
    UserId: string;
    Password: string;
  }
  // definying user type
  export type UserContextType = {
    user: User;
    authUser:any;
    setAuthUser:any;
    isLoggedIn:any;
    setisLoggedIn:any;
    authentication:any;
  };
  