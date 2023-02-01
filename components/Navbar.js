import Image from "next/image";
import sidestayLogo from "../public/sidestay.svg";
import {
  HiSearch,
  HiOutlineGlobeAlt,
  HiMenu,
  HiUserCircle,
  HiUser,
  HiUsers,
} from "react-icons/hi";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Navbar({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestNumber, setGuestNumber] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guestNumber,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3 md:px-10">
      {/* Left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className=" flex-grow pl-5 bg-transparent outline-none
          text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Search Place to Stay"}
        />
        <HiSearch
          onClick={search}
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#87AE73"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold text-gray-800">
              Number of Guests
            </h2>
            <HiUsers className="h-5 text-gray-800" />
            <input
              value={guestNumber}
              onChange={(e) => setGuestNumber(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-md outline-none text-[#729261]"
            />
          </div>

          <div className="flex">
            <button
              onClick={resetInput}
              className="flex-grow text-gray-500 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow text-[#87AE73] hover:text-[#729261]"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
