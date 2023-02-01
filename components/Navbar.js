import Image from "next/image";
import sidestayLogo from "../public/sidestay.svg";
import {
  HiSearch,
  HiOutlineGlobeAlt,
  HiMenu,
  HiUserCircle,
  HiUser,
} from "react-icons/hi";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={sidestayLogo}
          className="object-contain object-left"
          fill
          alt="/"
        />
      </div>
      {/* Mid - Search */}
      <div
        className="flex items-center md:border-2 rounded-full py-2
            md:shadow-sm"
      >
        <input
          className=" flex-grow pl-5 bg-transparent outline-none
                    text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Search place to stay"
        />
        <HiSearch
          className="hidden md:inline-flex h-8 w-8 bg-[#87AE73] text-white rounded-full
                    p-2 cursor-pointer md:mx-2 hover:bg-[#729261]"
        />
      </div>
      {/* Right */}
      <div className="flex items-center justify-end space-x-4">
        <p className="hidden md:inline-flex cursor-pointer text-gray-500 hover:text-gray-700">
          Become a Host
        </p>
        <HiOutlineGlobeAlt className="h-6 cursor-pointer text-gray-500 hover:text-gray-700" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <HiMenu className="h-6 cursor-pointer text-gray-500 hover:text-gray-700" />
          <HiUserCircle className="h-6 cursor-pointer text-gray-500 hover:text-gray-700" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
