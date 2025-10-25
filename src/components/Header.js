import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANG, USER_AVATAR } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { removeGptMovies, toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGpt = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // sign in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // UNSUBSCRIBE  when component unmounts
    return () => unsubscribe(); // cleanup
  }, [dispatch, navigate]);

  const handleGptSearch = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
    dispatch(removeGptMovies());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-full  px-7 py-1  bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-40 m-auto md:m-0" src={LOGO} alt="logo" />

      {user && (
        <div className="flex p-2 justify-between items-center">
          {showGpt && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className=" py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearch}
          >
            {showGpt ? "HomePage" : "AI Search"}
          </button>
          <img
            className="hidden md:block w-10 h-10 mr-2"
            src={user?.photoURL || USER_AVATAR}
            alt="userIcon"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-black bg-white rounded-lg p-2 hover:bg-gray-300"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
