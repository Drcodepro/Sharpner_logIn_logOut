import React, { useState ,useEffect} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [enteredCollage, setEnteredCollage] = useState('');
  const [collageIsValid, setCollageIsValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(()=>{
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6 && enteredCollage.trim().length > 3
    );
  },[enteredEmail,enteredPassword,enteredCollage]) //if one of thise dependency changes only when this useEffect will trigur okkk...

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
// belove valid checking logic we moved into useEffect because this is like a side effect and also reapeating a code
    // setFormIsValid(
    //   event.target.value.includes('@') && enteredPassword.trim().length > 6 && enteredCollage.trim().length > 3
    // );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
// belove valid checking logic we moved into useEffect because this is like a side effect and also reapeating a code
    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@') && enteredCollage.trim().length > 3
    // );
  };
  
  const collageChangeHandler = (event) => {
    setEnteredCollage(event.target.value);
// belove valid checking logic we moved into useEffect because this is like a side effect and also reapeating a code    
    // setFormIsValid(
    //   event.target.value.trim().length > 3 && enteredEmail.includes('@') && enteredPassword.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const validateCollageHandler = () => {
    setCollageIsValid(enteredCollage.trim().length > 3);
  };
  
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword,enteredCollage);
  };


  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
         >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
          >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            collageIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="collage">collage</label>
          <input
            type="text"
            id="collage"
            value={enteredCollage}
            onChange={collageChangeHandler}
            onBlur={validateCollageHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
