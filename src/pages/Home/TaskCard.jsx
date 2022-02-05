import React from "react";

const TaskCard = () => {
  return (
    <div>
      <div class="shadow-lg rounded-xl w-full max-w-xs p-6 bg-white dark:bg-gray-800 overflow-hidden">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="flex items-center justify-start w-full flex-grow">
            <div class="flex flex-col items-start ml-4">
              <span class="dark:text-white text-gray-700">Day 1</span>
              {/* <span class="text-gray-400 font-light text-sm dark:text-gray-300">
                Updated 3 min ago
              </span> */}
            </div>
          </div>
          <div class="flex-none hidden md:block ">
            <span class="w-full px-3 py-1 text-sm rounded-full text-white bg-blue-500">
              Today
            </span>
          </div>
        </div>
        <p class="text-gray-800 dark:text-white text-lg mt-4 mb-2">
          Learn C++{" "}
        </p>
        <p class="text-gray-400 font-normal text-sm">What I Did??</p>
        <div class="flex items-center rounded justify-between p-2 bg-blue-100 my-6">
          <div class="flex items-start w-full justify-between">
            {/* <p class="flex-grow w-full text-2xl text-gray-700">
              <span class="text-gray-400 font-light text-md">$</span>
              4,500
              <span class="text-sm font-light text-gray-400">/Month</span>
            </p> */}
            {/* <span class="px-3 py-1 flex-none text-sm rounded-full text-indigo-500 border border-indigo-500">
              Full time
            </span> */}
          </div>
        </div>
        {/* <button
          type="button"
          class="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
          Apply for this Job
        </button> */}

        <div class="flex mt-4 space-x-3 lg:mt-6">
          <a
            href="#"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Done
          </a>
          <a
            href="#"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">
            Edit
          </a>
          <a
            href="#"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">
            Share
          </a>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
