import React from "react";

const TotalTaskCard = () => {
  return (
    <div>
      <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center">
            {/* <span class="rounded-xl relative p-2 bg-blue-100"></span> */}
            <div class="flex flex-col">
              <span class="font-bold text-md text-black dark:text-white ml-2">
                You are doing great Name
              </span>
              <span class="text-sm text-gray-500 dark:text-white ml-2">
                Check your daily status here
              </span>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between mb-4 space-x-12">
          <span class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-green-700 bg-green-50">
            COMPLETED
          </span>
          <span class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-green-600 border border-green-600 bg-white">
            Let's Go
          </span>
        </div>
        <div class="block m-auto">
          <div>
            <span class="text-sm inline-block text-gray-500 text-3xl   dark:text-gray-100">
              Task done :
              <span class="text-gray-700 dark:text-white font-bold">50</span>
              /50
            </span>
          </div>
          <div>
            <div class="bg-white rounded-lg block p-4 m-auto">
              <div class="w-full h-4 bg-gray-400 rounded-full mt-3">
                <div class="w-3/4 h-full text-center text-xs text-white bg-pink-300 rounded-full">
                  75%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-start my-4 space-x-4">
          <span class="px-2 py-1 flex items-center text-xs rounded-md font-semibold text-green-500 bg-green-50">
            Day 1
          </span>
          <span class="px-2 py-1 flex items-center text-xs rounded-md text-yellow-600 font-semibold bg-yellow-200">
            Task Name
          </span>
        </div>

        <span class="px-2 py-1 flex w-36 mt-4 items-center text-xs rounded-md font-semibold text-yellow-500 bg-yellow-100">
          Next Task: 18 JUN
        </span>
      </div>
    </div>
  );
};

export default TotalTaskCard;
