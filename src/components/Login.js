import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [LoggedIn, setLoggedIn] = useState(false);

  const toggleLogin = () => {
    setLoggedIn(!LoggedIn);
  };

  return (
    <>
      <Header />
      <div className="flex-1 flex justify-center items-center bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_large.jpg)]">
        <form>
          <div className="w-full max-w-md p-8 text-white bg-black rounded-md bg-opacity-70">
            <h2 className="mb-6 text-3xl font-bold">
              {LoggedIn ? "Sing Up" : "Sign In"}
            </h2>
            <div className="mb-4">
              {LoggedIn && (
                <input
                placeholder="Name"
                type="text"
                className="w-full p-2 my-2 bg-gray-800 border border-gray-600 rounded"
                />
              )}
              <input
                placeholder="Email or phone number"
                type="email"
                className="w-full p-2 my-2 bg-gray-800 border border-gray-600 rounded"
                />
              <input
                placeholder="Password"
                type="password"
                className="w-full p-2 my-2 bg-gray-800 border border-gray-600 rounded"
                />
            </div>
            <p className="mt-4 cursor-pointer" onClick={toggleLogin}>
              {LoggedIn ? "Already have an account? Sign in now" : "New to Netflix? Sign up now"}
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
