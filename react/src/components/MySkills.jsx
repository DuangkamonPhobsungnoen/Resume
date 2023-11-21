import React from "react";

function MySkills() {
  return (
    <>
      <div className="text-2xl font-bold  text-white px-10 pt-5">My Skills</div>
      <div class="gap-8 sm:grid sm:grid-cols-2 px-10  text-white">
        <div>
          <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                HTML, CSS
            </dt>
            <dd class="flex items-center mb-3">
              <div class="w-full bg-gray-200 rounded h-2 dark:bg-gray-700 me-2">
                <div
                  class="bg-gradient-to-r from-purple-800 to-pink-500 h-2 rounded dark:bg-pink-500"
                  style={{ width: 249.5 }}
                ></div>
              </div>
              <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.9
              </span>
            </dd>
          </dl>
          <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
              JavaScript
            </dt>
            <dd class="flex items-center mb-3">
              <div class="w-full bg-gray-200 rounded h-2 dark:bg-gray-700 me-2">
                <div
                  class="bg-gradient-to-r from-purple-800 to-pink-500 h-2 rounded dark:bg-pink-500"
                  style={{ width: 210 }}
                ></div>
              </div>
              <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                7.5
              </span>
            </dd>
          </dl>
          <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
              React
            </dt>
            <dd class="flex items-center mb-3">
              <div class="w-full bg-gray-200 rounded h-2 dark:bg-gray-700 me-2">
                <div
                  class="bg-gradient-to-r from-purple-800 to-pink-500 h-2 rounded dark:bg-pink-500"
                  style={{ width: 196 }}
                ></div>
              </div>
              <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                7.0
              </span>
            </dd>
          </dl>
          <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Vue.js
            </dt>
            <dd class="flex items-center">
              <div class="w-full bg-gray-200 rounded h-2 dark:bg-gray-700 me-2">
                <div
                  class="bg-gradient-to-r from-purple-800 to-pink-500 h-2 rounded dark:bg-pink-500"
                  style={{ width: 207.2 }}
                ></div>
              </div>
              <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                7.4
              </span>
            </dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 pt-3">
              Tailwind
            </dt>
            <dd class="flex items-center mb-3">
              <div class="w-full bg-gray-200 rounded h-2 dark:bg-gray-700 me-2">
                <div
                  class="bg-gradient-to-r from-purple-800 to-pink-500 h-2 rounded dark:bg-pink-500"
                  style={{ width: 224 }}
                ></div>
              </div>
              <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.0
              </span>
            </dd>
          </dl>
          <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Bootstrap
            </dt>
            <dd class="flex items-center mb-3">
              <div class="w-full bg-gray-200 rounded h-2 dark:bg-gray-700 me-2">
                <div
                  class="bg-gradient-to-r from-purple-800 to-pink-500 h-2 rounded dark:bg-pink-500"
                  style={{ width: 238 }}
                ></div>
              </div>
              <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.5
              </span>
            </dd>
          </dl>
          <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
             Svelte
            </dt>
            <dd class="flex items-center">
              <div class="w-full bg-gray-200 rounded h-2 dark:bg-gray-700 me-2">
                <div
                  class="bg-gradient-to-r from-purple-800 to-pink-500 h-2 rounded dark:bg-pink-500"
                  style={{ width: 168 }}
                ></div>
              </div>
              <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                6.0
              </span>
            </dd>
          </dl>
        </div>
      </div>
    </>
  );
}

export default MySkills;
