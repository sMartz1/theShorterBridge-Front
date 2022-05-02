import { createContext , useContext } from "react";

const authContext = createContext();

export const useAuth = ()=> useContext(authContext);

export const AuthProvider = ({children})=>{
    const user = {
        login:true
    }
    return(
        <authContext.Provider value={{user}}>
            {children}
        </authContext.Provider>
    ) 
}