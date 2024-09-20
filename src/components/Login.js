import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignInForm, setIsSignInForm ] = useState(true);
  const[errorMessage,setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if(message) return;

    //Sign in/ Sign up logic
    if(!isSignInForm){
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
        )
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ "-" +errorMessage);
      });
    }
    else{
     // Sign in logic
     signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "-" +errorMessage);
  });

    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_small.jpg" 
        alt="logo" />
      </div>
      <form
      onSubmit={(e) => e.preventDefault()} 
      className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
         <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
        <input 
        type="text" 
        placeholder='Full Name' 
        className='p-4 my-4 w-full bg-gray-700'/>
      )}
        <input 
        ref={email}
        type="text" 
        placeholder='Email Address' 
        className='p-4 my-4 w-full bg-gray-700'/>

        <input 
        ref={password}
        type="password" 
        placeholder='Password' 
        className='p-4 my-4 w-full bg-gray-700'/>

        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button 
        className='my-6 p-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registerted? Sign In Now"}
          </p>
      </form>
    </div>
  )
}

export default Login