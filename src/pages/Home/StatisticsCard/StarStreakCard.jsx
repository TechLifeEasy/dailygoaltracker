import React from "react";

const StarStreakCard = ({data,changeDaySnap}) => {

  console.log(data,'zeel')

  return (
    <div>
      <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center">
            {/* <span class="rounded-xl relative p-2 bg-blue-100"></span> */}
            <div class="flex flex-col">
              <span class="font-bold text-md text-black dark:text-white ml-2">
                Your Daily Streak
              </span>
              <span class="text-sm text-gray-500 dark:text-white ml-2">
                Each star is your medal of consistency
              </span>
            </div>
          </div>
        </div>
        <div class="flex item-center mt-2">
          <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
          </svg>
          <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
          </svg>
          <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
          </svg>
          <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
          </svg>
          <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
          </svg>
        </div>
        <div class="flex items-center justify-between mb-4 space-x-12">
          <span class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-green-700 bg-green-50">
            REST DAYS REMAINING
          </span>
          <span class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-green-600 border border-green-600 bg-white">
            Beware
          </span>
        </div>
        <div class="block m-auto">
          <div>
            <span class="text-sm inline-block text-gray-500 text-3xl   dark:text-gray-100">
              Rest Days : {""}
              <span class="text-gray-700 dark:text-white font-bold">50</span>
              /50
            </span>
          </div>
          <div class="w-full h-2 bg-gray-200 rounded-full mt-2">
            <div class="w-full h-full text-center text-xs text-white bg-pink-400 rounded-full"></div>
          </div>
        </div>
        <div class="flex items-center justify-start my-4 space-x-4">
          <span class="px-2 py-1 flex items-center text-xs rounded-md font-semibold text-green-500 bg-green-50">
            {""}Next Rest Day:
          </span>
          {/* <span class="px-2 py-1 flex items-center text-xs rounded-md text-yellow-600 font-semibold bg-yellow-200"></span> */}
        </div>

        <span class="px-2 py-1 flex w-36 mt-4 items-center text-xs rounded-md font-semibold text-yellow-500 bg-yellow-100">
          18 JUN
        </span>
      </div>
    </div>
  );
};

export default StarStreakCard;
