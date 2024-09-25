import React, { useEffect } from 'react'
import { auth } from '../utils/Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_AVATAR } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid, email, displayName} = user;
      dispatch(addUser({uid: uid, uid:email, uid:displayName}));
      navigate("/browse");
    } else {
      // User is signed out
      dispatch(removeUser());
      navigate("/");
    }
  });
  //unssubscribe when component unmount
  return() => unsubscribe();
      },[]);
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' 
        src={LOGO}
        alt="logo" />
        {user && (
        <div className='flex p-2'>
          <img 
          className='w-12 h-12'
          src= {USER_AVATAR}
          alt="icon" />
          <button
          onClick={handleSignOut} 
          className='font-bold text-white'>(Sign Out)</button>
      </div>
        )}
    </div>
    
  );
};

export default Header