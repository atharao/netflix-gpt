import React from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { toggleSearch } from "../features/searchToggle";
import { useDispatch } from "react-redux";
import { LANG } from "../utils/constants";
import { selectLang } from "../features/languageSlice";

const Header = () => {
  const user = useSelector((store) => store.user.user);
  const isSerachPage = useSelector((store) => store.search.searchToggleState);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const toggleButton = () => {
    dispatch(toggleSearch());
  };

  const handleSelect = (e) => {
    dispatch(selectLang(e.target.value));
  };

  return (
    <div className="flex items-center justify-between p-4 text-white bg-black">
      <h1 className="text-2xl font-bold">Netflix GPT</h1>
      {user && (
        <div className="flex items-center space-x-4">
          <select
            name="languages"
            onChange={handleSelect}
            className="text-black"
          >
            {LANG.map((lang) => (
              <option value={lang.value} key={lang.lang}>
                {lang.lang}
              </option>
            ))}
          </select>
          <button
            onClick={toggleButton}
            className="p-2 border border-red-200 rounded-lg"
          >
            {isSerachPage ? "Home" : "GPT Search"}
          </button>

          <span>Welcome, {user.displayName}</span>
          <button
            onClick={handleSignOut}
            className="p-2 border border-red-200 rounded-lg"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
