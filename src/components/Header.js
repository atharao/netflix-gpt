import React from 'react';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Header = () => {
  const user = useSelector((store) => store.user.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="flex items-center justify-between p-4 text-white bg-black">
      <h1 className="text-2xl font-bold">Netflix GPT</h1>
      {user ? (
        <div className="flex items-center space-x-4">
          <span>Welcome, {user.displayName}</span>
          <button onClick={handleSignOut} className="hover:underline">
            Sign Out
          </button>
        </div>
      ) : (
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#login" className="hover:underline">
                Login
              </a>
            </li>
            <li>
              <a href="#signup" className="hover:underline">
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;