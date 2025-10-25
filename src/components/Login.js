import Header from "./Header";
import { BG_URL, USER_AVATAR } from "../utils/constants";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Get values safely
    const enteredName =
      !isSignInForm && name.current ? name.current.value : null;
    const enteredEmail = email.current ? email.current.value : "";
    const enteredPassword = password.current ? password.current.value : "";

    // Validate the form data
    const message = checkValidData(enteredName, enteredEmail, enteredPassword);
    setErrorMessage(message);
    if (message) return;

    // sign in / sign up
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          // update a user profile api
          updateProfile(user, {
            displayName: enteredName,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={BG_URL}
          alt="background"
          className="w-full h-full object-cover"
        />
        {/* Gray overlay */}
        <div className="absolute inset-0 bg-gray-950 bg-opacity-70"></div>
      </div>

      {/* Form */}
      <div className="flex items-center justify-center h-full">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-96 p-10 bg-black rounded-xl shadow-lg backdrop-blur text-white bg-opacity-40"
        >
          <h1 className="font-bold text-3xl mb-6 text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {/* Full Name only for Sign Up */}
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 mb-4 w-full bg-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="p-3 mb-4 w-full bg-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 mb-6 w-full bg-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <p className="text-red-500 font-bold text-lg py-2 ">{errMessage}</p>
          <button
            className="p-3 mb-6 bg-red-600 hover:bg-red-900 w-full rounded-md font-semibold transition"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="text-sm text-gray-300 hover:text-white text-center cursor-pointer"
            onClick={toggleSignIn}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
