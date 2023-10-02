import Link from "next/link";

import Hamburger from "hamburger-react";
import { FaUser, FaBell, FaSearch, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import NavElements from "./NavElements";
import UserInfoElements from "./UserInfoElements";
export default function NavBar() {
  return (
    <nav className="flex flex-row justify-end lg:justify-between py-4 px-6 border-b-2 border-gray-200 drop-shadow-sm relative z-10">
      <NavElements />
      <UserInfoElements />
    </nav>
  );
}
