import React ,{useEffect}from 'react'
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
// import { removeUser } from '../utils/UserSlice';
import { addUser,removeUser } from '../utils/UserSlice'
import { onAuthStateChanged } from "firebase/auth";
import { LOGO, SUPPORTED_LANGUAGES, user_logo } from '../utils/Constants';
import { toggleGptSearchView } from '../utils/GptSlice';
import { changeLanguage } from '../utils/ConfigSlice';



const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const user  = useSelector(store=> store.user);
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);

  const handleGptSearchClick =()=>{
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }
  


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
         
         {user &&(<div className='flex '>
          {showGptSearch && (<select className='p-2 h-10 m-5 bg-gray-100/35' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang)=><option key={lang.indentifier} value={lang.indentifier}>{lang.name}</option>)}
            {/* <option value="en">English</option>
            <option value="hindi">Hindi</option>
            <option value="spanish">spanish</option> */}
          </select>)}

          <button  onClick={handleGptSearchClick} 
          className='py-2 px-2 mx-2 my-4 bg-white/35 h-11 text-white rounded-lg'>{showGptSearch ? "Homepage":"AI Search"}</button>
      <img className="w-10 h-10 m-4" src={user?.photoURL} alt="user logo"/>
      <button onClick={handleSignout} className="font-bold text-white">Sign out</button>
    </div>)
         }
    </div>
    
  );
};

export default Header;