
import { useState ,useEffect} from 'react';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/signUp';
import Home from './components/Home';




function App() {
  const [showSignUp , setShowSignUp] = useState(false);
  const [showHome , setShowHome] = useState(false)

  const [userList , setUserList] = useState([]);
    useEffect(() => {
        fetch('https://6067681298f405001728ed59.mockapi.io/api/user')
        .then(res => res.json())
        .then(data => setUserList(data))
    } )
    // console.log(userList)

  var handleSignUp = () => {
    setShowSignUp(!showSignUp)
  }

  var handleSignIn = (newUser) =>{
    // console.log(user);
    if(userList.length === 0 || !(userList.findIndex(user => user.email === newUser.email) != -1)){
      alert("User is not Registered!")
    }
    else {
      setShowHome(!showHome);
      alert('Login Successfully!!')
    }  
  }
  
  var  handleSignOut = () => {
    setShowHome(!showHome);
  }

  return (
    <div className="App">
      <div id="container">
        {showHome ? <Home handleSignIn={handleSignIn} handleSignOut={handleSignOut}  userList = {userList}/> : (showSignUp ? <SignUp handleSignUp = {handleSignUp} /> : <SignIn  handleSignUp = {handleSignUp} handleSignIn = {handleSignIn} />)}
        
      </div>
     </div>
  );
}

export default App;
