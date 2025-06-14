import React ,{useEffect}from 'react'
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
// import { removeUser } from '../utils/UserSlice';
import { addUser,removeUser } from '../utils/UserSlice'
import { onAuthStateChanged } from "firebase/auth";
import { LOGO, user_logo } from '../utils/Constants';



const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const user  = useSelector(store=> store.user);
  


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email,displayName,photoURL} = user;
    
    dispatch(addUser({
        uid:uid,
        email:email,
        displayName:displayName,
        photoURL:photoURL}));
    // ...
   navigate("/browse")
  } else {
    // User is signed out
    // ...
    dispatch(removeUser());
    navigate("/")
    
    
  }
})
return ()=> unsubscribe();
    },[])
  
  const handleSignout =()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
  
  navigate("/")
}).catch((error) => {
  // An error happened.
  navigate("/error")
});
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className="w-44" src={LOGO}
         alt ="logo"/>
         
         {user &&(<div className='flex'>
      <img className="w-10 h-10 m-4" src={user?.photoURL} alt="user logo"/>
      <button onClick={handleSignout} className="font-bold text-white">Sign out</button>
    </div>)
         }
    </div>
    
  );
};

export default Header;