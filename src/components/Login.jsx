import React, { useState ,useRef} from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../utils/Firebase"

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice';
import { user_logo } from '../utils/Constants';





const Login = () => {
    const[isSignForm,setSignInForm] = useState(true);
    const[errorMessage,setErrorMessage] = useState(null);
    
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignForm =()=>{
        setSignInForm(!isSignForm);
    } 

    const HandleButtonClick=()=>{
        
        
        const message=checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);

        if(message) return;
    
    if(!isSignForm){
      //forsingup
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
   .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
  displayName: name.current.value, photoURL: user_logo
    }).then(() => {
  // Profile updated!
  // ...
   const {uid,email,displayName,photoURL} = auth.currentUser;
      
      dispatch(addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL}));

 
    }).catch((error) => {
  // An error occurred
   setErrorMessage(error.message);
  // ...
    });

     
    // ...
  })
   .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+errorMessage);
    // ..
  });
    }else{
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
     

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+errorMessage);
  });

    }
  }

    

  return (
    
    <div>
        <Header/>
        <div className='absolute '>

        <img  className="h-screen object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_small.jpg"
        alt="background img"/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()}className='w-full md:w-3/12  absolute  p-12 bg-black/80 my-36 mx-auto  right-0 left-0 text-white rounded-md '>
        <h1 className='font-bold text-3xl py-4 ' >{isSignForm ? "Sign In" : "SignUp" }</h1>
            
             {!isSignForm && (<input ref ={name} type='text' 
             placeholder='Full Name' 
             className="p-2 my-2 w-full
              bg-gray-900"/>)}
            
             <input ref ={email} type='text' 
             placeholder='Email Address' 
             className="p-2 my-2 w-full
              bg-gray-900"/>
            
             
             <input ref = {password} type='password'
              placeholder='Password'
              className="p-2 my-2 w-full
               bg-gray-900"/>

               <p className="text-red-700  text-lg py-2">{errorMessage}</p>

             <button onClick={HandleButtonClick} 
             className='flex justify-center items-center p-4 my-4 bg-red-700 w-full h-3  rounded-md'>
                {isSignForm ? "Sign In" : "SignUp" }</button>
             <p className="py-4" onClick={toggleSignForm}>
                {isSignForm ? "New to Netflix? Sign Up Now" : "Already a User ? SignIn" }</p>
        </form>
    </div>
  )
}

export default Login;