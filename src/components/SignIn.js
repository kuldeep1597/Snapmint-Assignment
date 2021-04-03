import React, { useState } from 'react';
import './SignIn.css';
import validator  from 'validator';

const SignIn = (props) => {
    // console.log(props)
    const [user , setUser] = useState({email : '' , password : ''});
    const handleUserChanges = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user , [name] : value});
        console.log(user);
    }

    const validation = () => {
        if(!(validator.isEmail(user.email) && validator.isStrongPassword(user.password)) ) {
           alert('Enter valid Email or Password!')
       }
   }

    return (
        <div className="loginBox">
            <div className="textbox">
                <input type="email" placeholder="Email" required 
                name = 'email' value ={user.email} onChange = {handleUserChanges}/>
            </div>
            <div className="textbox">
                <input type="password" placeholder="Password" required 
                name = 'password' value ={user.password} onChange = {handleUserChanges}/>
            </div>
            <button id="btn" value="Sign in" onClick={validation , () => props.handleSignIn(user)}>SignIn</button>
            {/* <button id="btn" value="list" onClick={props.handleSignIn} >Get list</button> */}
            <button id="newUserButton" onClick = {props.handleSignUp} >New User</button> 

    </div>
    );
}

export default SignIn;