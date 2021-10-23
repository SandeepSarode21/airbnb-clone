import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
  SearchIcon,
} from "@heroicons/react/solid";

function Header() {
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
          type="text"
          placeholder="Start your search"
          className="flex-grow pl-5 bg-transparent  outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:inline-flex md:mx-2" />
      </div>

      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full ">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
