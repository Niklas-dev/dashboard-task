import { FaBell, FaChevronDown, FaSearch } from "react-icons/fa";
import Image from "next/image";
import Avatar from "../assets/avatar.png";
export default function UserInfoElements() {
  return (
    <div className="flex flex-row items-center gap-4">
      <button className="h-11 w-fit px-4 rounded-full flex items-center justify-center border border-gray-300 gap-2">
        Project Name #1 <FaChevronDown />
      </button>
      <button className="h-11 w-11 rounded-full flex items-center justify-center border border-gray-300">
        <FaSearch size={"1.2rem"} />
      </button>
      <button className="h-11 w-11 rounded-full flex items-center justify-center border border-gray-300 relative">
        <FaBell size={"1.2rem"} />
        <div className="absolute bg-green-500 h-4 w-4 rounded-full top-0 right-0"></div>
      </button>
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full h-11 w-11"
          height={100}
          width={100}
          alt="avatar"
          src={Avatar}
        />
        <FaChevronDown />
      </div>
    </div>
  );
}