import { createContext, useEffect, useContext, useState } from 'react';
import authProvider from '../../authProvider';
const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [permissions, setPermissions] = useState([]);
    
    // Function to check token expiration
    const checkTokenValidity = (token) => {
        try {
            const decodedToken = JSON.parse(atob(token.split(".")[1])); 
            return decodedToken.exp * 1000 > Date.now(); 
        } catch (error) {
            return false;
        }
    };
    
    // Restore user and permissions on page reload
    useEffect(() => {
        const storedAuth = JSON.parse(localStorage.getItem("auth"));

        if (storedAuth && storedAuth.token) {
            const isTokenValid = checkTokenValidity(storedAuth.token);
            if (isTokenValid) {
                setPermissions(storedAuth.permissions);
            } else {
                authProvider.logout(); // Token expired, clear auth data
            }
        }
    }, []);

    const hasPermission = (action, resource) => {
        return permissions.includes(`${action}:${resource}`);
    };
    return (
        <AuthContext.Provider value={{permissions, setPermissions, hasPermission}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = ()=> {
    const context = useContext(AuthContext)
    if(!context)
        throw new Error("useAuth must be used within an AuthProvider")
    return context
};

export const AuthBulkActions = ({action, resource}) => {
    const {hasPermission} = useAuth();
    return hasPermission(action,resource) ? <BulkDeleteButton /> : null;
};