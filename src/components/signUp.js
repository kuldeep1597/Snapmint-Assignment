import React, {useState} from 'react';
import './signUp.css';
import validator from 'validator'

const SignUp = (props) => {
    // console.log(props)
   const [userData , setUserData] = useState({ name : '' , email: '' , password: ''})
    const handleUserDataChanges = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({...userData , [name] : value});
        // console.log(userData);
    }
    const validation = () => {
         if(!(validator.isEmail(userData.email) && validator.isStrongPassword(userData.password)) ) {
            alert('Enter valid Email or Password!')
        }
    }
    
    const handleSubmit = () =>{
        fetch('https://6067681298f405001728ed59.mockapi.io/api/user', {
            method: 'post',
            body: JSON.stringify({
                name: userData.name,
              password: userData.password,
              email: userData.email
            }),
            headers:{
              "Content-Type": 'application/json'
              }
          })
          .then(async response => {
                const data = await response.json();
                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                //this.setState({ postId: data.id })
            alert("Congratulation User Registered");
            })
            .catch(error => {
            alert("error");
                //this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }
    return (
        <div className="loginBox">
            <div className="textbox">
                <input type="text" placeholder="Full Name" name="name"  value = {userData.name} 
                onChange = {handleUserDataChanges} required/>
            </div>
            <div className="textbox">
                <input type="email" placeholder="Email" name="email"  value = {userData.email} 
                onChange = {handleUserDataChanges} required/>
            </div>
            <div className="textbox">
                <input type="password" placeholder="Password" name="password"  value = {userData.password} 
                onChange = {handleUserDataChanges} required />
            </div>
            <button id="btn" value="Sign in" onClick = {validation , handleSubmit} >SignUp</button>  
            <button id="goBack"  onClick = {props.handleSignUp} >Go Back</button>  
    </div>
    );
}

export default SignUp;