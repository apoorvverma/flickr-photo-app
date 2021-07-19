import React from "react";

const NavBar = ({ handleChange }) => {
  return (
    <div className="font-sans">
      <div className="fixed w-full hero-headline items-center justify-center pt-5 text-center bg-gray-800">
        <h1 className=" font-semibold text-3xl text-white">Search Photos!</h1>
        <input
          className="bg-white shadow-md md:w-3/4 outline-none p-2 px-5 m-2 rounded-md focus:ring-2 focus:ring-purple-600"
          placeholder="search"
          onChange={(e) => handleChange(e.target.value)}
        ></input>
        <button className="text-white bg-purple-600 shadow-md outline-none hover:ring-2 hover:ring-purple-600 rounded-md p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
