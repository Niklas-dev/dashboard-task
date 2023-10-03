import { FaBell, FaChevronDown, FaSearch, FaPlus } from "react-icons/fa";
import Image from "next/image";
import Avatar from "../assets/avatar.png";
import UserProfileAvatar from "./UserProfileAvatar";
export default function UserInfoElements() {
  return (
    <div className="flex flex-row items-center gap-4">
      <button className="h-10 w-fit px-4 rounded-lg flex items-center justify-center border border-gray-300 gap-2 text-lg outline-none transition-colors hover:bg-gray-100">
        <FaPlus size={"1rem"} />
        <span className="hidden md:flex">Add Services</span>
      </button>

      <button className="h-10 w-10 rounded-full flex items-center justify-center border border-gray-300 transition-colors hover:bg-gray-100">
        <FaSearch size={"1.2rem"} />
      </button>
      <button className="h-10 w-10 rounded-full flex items-center justify-center border border-gray-300 relative transition-colors hover:bg-gray-100">
        <FaBell size={"1.2rem"} />
        <div className="absolute bg-green-500 h-4 w-4 rounded-full top-0 right-0"></div>
      </button>
      <UserProfileAvatar image={Avatar} />
    </div>
  );
}
