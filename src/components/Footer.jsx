import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a
            href="https://flowbite.com"
            class="hover:underline"
            target="_blank">
            X Days of Y GoalTracker™
          </a>
          . All Rights Reserved.
        </span>

        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022 Built with ❤️ by {""}
          <a
            href="https://flowbite.com"
            class="hover:underline"
            target="_blank">
            <a href="">Barun</a> and <a href="">Zeel</a>
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Footer;
