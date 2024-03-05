import React from 'react';

const AuthContext = React.createContext({
    isLogedIn:false, 
    onLogOut:()=>{}
});

export default AuthContext;