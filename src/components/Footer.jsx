import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022 X Days of Y GoalTracker™ . All Rights Reserved.
        </span>

        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Built with ❤️ by {""}
          <a href="">Barun</a> and <a href="">Zeel</a>
        </span>
      </footer>
    </div>
  );
};

export default Footer;
