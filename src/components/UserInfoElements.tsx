import { FaBell, FaChevronDown, FaSearch } from "react-icons/fa";
import Image from "next/image";
import Avatar from "../assets/avatar.png";
export default function UserInfoElements() {
  return (
    <div className="flex flex-row items-center gap-4">
      <select className="h-11 w-fit px-4 rounded-full flex items-center justify-center border border-gray-300 gap-2 text-lg outline-none transition-colors hover:bg-gray-100">
        <option>Project Name #1</option>
        <option>Project Name #2</option>
        <option>Project Name #3</option>

        <FaChevronDown />
      </select>
      <button className="h-11 w-11 rounded-full flex items-center justify-center border border-gray-300 transition-colors hover:bg-gray-100">
        <FaSearch size={"1.2rem"} />
      </button>
      <button className="h-11 w-11 rounded-full flex items-center justify-center border border-gray-300 relative transition-colors hover:bg-gray-100">
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
