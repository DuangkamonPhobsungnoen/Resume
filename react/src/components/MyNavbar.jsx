import React from "react";
import MyBannar from "./MyBannar";
function MyNavbar() {
  const handleContactClick = () => {
    window.scrollTo(0, document.body.scrollHeight);
    window.scrollTo({
      top: documentHeight,
      behavior: 'smooth',
    });
  };
  return (
    <nav class="bg-black border-gray-200 fixed top-0 left-0 w-full z-20">
      <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/external-rose-apple-vegan-icongeek26-flat-icongeek26.png"
            alt="external-rose-apple-vegan-icongeek26-flat-icongeek26"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
            CHOMPOO
          </span>
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            id="footer"
            onClick={handleContactClick}
            class="text-gray-100  hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Contact me
          </button>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
