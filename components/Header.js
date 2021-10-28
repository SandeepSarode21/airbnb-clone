import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.setEndDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:p-10">
      {/* left */}
      <div className="relative flex h-10 items-center">
        <Image
          src="https://links.papareact.com/qd3"
          alt="Logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle - serach*/}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Start your search"
          className="flex-grow pl-5 bg-transparent  outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:inline-flex md:mx-2" />
      </div>

      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 hover:animate-spin transition-transform ease-in-out" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full ">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5861"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b nb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UserIcon className="h-5" />
            <input type="number" />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
