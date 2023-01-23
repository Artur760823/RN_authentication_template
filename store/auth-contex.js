import { createContext, useState } from "react";

export const AuthContex = createContext({
    token:'',
    isAuthenticated: false,
    authenticate: (token)=>{},
    logout: ()=>{}
});

function AuthContexProvider({children}){
    const [authToken, setAuthToken] = useState();

    function authenticate(token){
        setAuthToken(token);
    }

    function logout(){
        setAuthToken(null);
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    }

    return <AuthContex.Provider value={value}>{children}</AuthContex.Provider>
}

export default AuthContexProvider;
