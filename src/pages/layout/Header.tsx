import { useAuth } from "hooks/useAuth";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const { username } = useAuth();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const navigate = useNavigate()

  const handleSignOut = () =>{
    localStorage.removeItem("auth")
    navigate('/login')
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-sky-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          className="mx-auto h-10 w-auto"
          src="../logo192.png"
          alt="Your Company"
        />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => {
            setOpenMenu((prev) => !prev);
          }}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          openMenu ? "block" : "md: hidden sm:hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <NavLink
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Home
          </NavLink>
        </div>
        <div>
          {username && (
            <>
              <div className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                {username}
              </div>
              <button onClick={handleSignOut} className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 border border-red-500 rounded-lg ml-3">
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
