import React from 'react';
import { useContext } from 'react';
import classes from './Navigation.module.css';
import AuthContext from '../../context/Auth_context';

const Navigation = () => {
// using useContext hook
   // const ctx = useContext(AuthContext);

  return ( <AuthContext.Consumer>
     {(ctx)=>{
     return(
        <nav className={classes.nav}>
          <ul>
            {ctx.isLogedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {ctx.isLogedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {ctx.isLogedIn && (
              <li>
                <button onClick={ctx.onLogOut}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
     )
    }}
  </AuthContext.Consumer>)
 
};

export default Navigation;
