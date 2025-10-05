import React, { useRef, useState } from "react";
import validate from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [Response, setResponse] = useState("");

  const email = useRef();
  const password = useRef();
  const name = useRef();

  const toggleLogin = () => {
    setIsSignUp(!isSignUp);
  };

  const handleLogin = () => {
    const response = validate(
      email.current.value,
      password.current.value,
      isSignUp ? name.current.value : "name"
    );
    setResponse(response);

    if (response) return;

    if (isSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log(userCredential);

          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
            })
            .catch((error) => {
              setResponse(error.message);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setResponse(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log(userCredential);

          // Signed in
        })
        .catch((error) => {
          const errorMessage = error.message;
          setResponse(errorMessage);
        });
    }
  };

  return (
    <>
      <div className="flex-1 flex justify-center items-center bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_large.jpg)]">
        <form>
          <div className="w-full max-w-md p-8 text-white bg-black rounded-md bg-opacity-70">
            <h2 className="mb-6 text-3xl font-bold">
              {isSignUp ? "Sign Up" : "Sign In"}
            </h2>
            <div className="mb-4">
              {isSignUp && (
                <input
                  ref={name}
                  placeholder="Name"
                  type="text"
                  className="w-full p-2 my-2 bg-gray-800 border border-gray-600 rounded"
                />
              )}
              <input
                ref={email}
                placeholder="Email or phone number"
                type="email"
                className="w-full p-2 my-2 bg-gray-800 border border-gray-600 rounded"
              />
              <input
                ref={password}
                placeholder="Password"
                type="password"
                className="w-full p-2 my-2 bg-gray-800 border border-gray-600 rounded"
              />

              <button
                className="w-full p-2 my-2 bg-red-600 border border-red-700 rounded"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
              <p className="text-sm font-bold text-red-600">{Response}</p>
            </div>
            <p className="mt-4 cursor-pointer" onClick={toggleLogin}>
              {isSignUp
                ? "Already have an account? Sign in now"
                : "New to Netflix? Sign up now"}
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
