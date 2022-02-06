import React,{useState} from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase";
import { Logout } from "../../Api/user";

const Navbar = () => {
  const [hashUser,setHashUser] = useState(localStorage.getItem('user'));
 


  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded shadow mt-2 dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex">
          <span className="self-center text-lg font-semibold x-1 rounded whitespace-nowrap dark:text-white bg-yellow-200 p-2 font-black font-mono">
            X Days of Y Tracker
          </span>
        </a>
        <div className="flex md:order-2 gap-3">
        <a href="/" className="flex">

        <button
          type="button"
          className="text-white mx-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
          Go to tasks
        </button>
          </a>
          {hashUser ? (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               onClick={Logout}
            
            >
              Log Out
            </button>
          ) : (
            <>
              <Link to="/signup">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign Up
                </button>
              </Link>
              <Link to="/login">
                <button
                  type="button"
                  className="text-white mr-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Log In
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
