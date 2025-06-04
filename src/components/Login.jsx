import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const[isSignForm,setSignInForm] = useState(true);

    const toggleSignForm =()=>{
        setSignInForm(!isSignForm);
    } 

  return (
    
    <div>
        <Header/>
        <div className='absolute'>

        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_small.jpg"
        alt="background img"/>
        </div>
        <form className='w-3/12  absolute  p-12 bg-black/80 my-36 mx-auto  right-0 left-0 text-white rounded-md '>
        <h1 className='font-bold text-3xl py-4 ' >{isSignForm ? "Sign In" : "SignUp" }</h1>
            
             {!isSignForm && (<input type='text' 
             placeholder='Full Name' 
             className="p-2 my-2 w-full
              bg-gray-900"/>)}
            
             <input type='text' 
             placeholder='Email Address' 
             className="p-2 my-2 w-full
              bg-gray-900"/>
            
             
             <input type='password'
              placeholder='Password'
              className="p-2 my-2 w-full
               bg-gray-900"/>
             <button className='flex justify-center items-center p-4 my-4 bg-red-700 w-full h-3  rounded-md'>{isSignForm ? "Sign In" : "SignUp" }</button>
             <p className="py-4" onClick={toggleSignForm}>{isSignForm ? "New to Netflix? Sign Up Now" : "Already a User ? SignIn" }</p>
        </form>
    </div>
  )
}

export default Login;