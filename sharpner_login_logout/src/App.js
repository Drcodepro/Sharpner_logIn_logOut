import React, { useState,useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/Auth_context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(()=>{
  const storedUserLogedInInfo = localStorage.getItem('isLoggedIn');
  if(storedUserLogedInInfo==='1'){
    setIsLoggedIn(true);
  }
},[]);

  const loginHandler = (email, password,collage) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.clear('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{isLogedIn:isLoggedIn,
    onLogOut:logoutHandler}}>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home/>}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
