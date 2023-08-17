// LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { auth } from './firebaseConfig';


const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log('Blah')
      nav('./dashboard')
    })
    .catch((error) => {
      setEmail('');
      setPassword('');
      alert("Email or password is incorrect!");
      console.log(error.message)
    });
  
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  const handleSignUp = () => {
    nav('./signup')
  };


  return (
    <div className="login-page">
      <div className="login-form">
        <img src="/coolant_logo_new2.png" className="coolant-logo" />
        <h5 className='login-words'>Coolant Dashboard: <br /> For Next Generation Forest Insights</h5>
        <div onSubmit = {handleLogin} onKeyDown={handleKeyDown} className="login-entries">
          <input
            className='username-input'
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
          <button className='login-button' type="submit" onClick={handleLogin}>
          Login
          </button>
          </div>
        </div>
      </div>
      <h5 className='words'> Bringing trust to carbon markets and helping scale the world's first gigaton of carbon removals </h5>
    </div>
  ); 
};

export default LoginPage;


/* 
All accounts need to be name@coolant.earth

Test login
Email: pilot@coolant.earth
Pword: Pilot@123

Add this to Login if you want to sign up another user
<button type="submit" onClick={handleSignUp} disabled>
  Sign Up
</button>
*/