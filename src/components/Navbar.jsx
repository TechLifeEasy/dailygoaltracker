import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded shadow mt-2 dark:bg-gray-800">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" class="flex">
          <span class="self-center text-lg font-semibold x-1 rounded whitespace-nowrap dark:text-white bg-yellow-200 p-2 font-black font-mono">
            X Days of Y Tracker
          </span>
        </a>
        <div class="flex md:order-2">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Sign Up
          </button>
          <button
            type="button"
            class="text-white mx-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Log In
          </button>
          <button
            type="button"
            class="text-white mx-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Go to tasks
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
