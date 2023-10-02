"use client";
import {
  FaHome,
  FaShoppingBag,
  FaUsers,
  FaUserEdit,
  FaChartLine,
} from "react-icons/fa";

import { usePathname } from "next/navigation";
import Link from "next/link";
export default function SideBar() {
  const pathname = usePathname().substring(11); // get only relative path e.g. overview

  return (
    <div className="w-80 h-full bg-gray-50 p-4">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <ul className="flex flex-col gap-2 mt-4">
        <Link
          href={"overview"}
          className={`${
            pathname == "overview" && "bg-[#242424] text-white"
          } py-1.5 px-3 rounded-md transition-transform hover:translate-x-1 cursor-pointer flex flex-row items-center gap-3`}
        >
          <FaHome />
          Overview
        </Link>
        <Link
          href={"orders"}
          className={`${
            pathname == "orders" && "bg-[#242424] text-white"
          } py-1.5 px-3 rounded-md transition-transform hover:translate-x-1 cursor-pointer flex flex-row items-center gap-3`}
        >
          <FaShoppingBag />
          Orders
        </Link>
        <Link
          href={"clients"}
          className={`${
            pathname == "clients" && "bg-[#242424] text-white"
          } py-1.5 px-3 rounded-md transition-transform hover:translate-x-1 cursor-pointer flex flex-row items-center gap-3`}
        >
          <FaUsers />
          Clients
        </Link>
        <Link
          href={"statistics"}
          className={`${
            pathname == "statistics" && "bg-[#242424] text-white"
          } py-1.5 px-3 rounded-md transition-transform hover:translate-x-1 cursor-pointer flex flex-row items-center gap-3`}
        >
          <FaChartLine />
          Statistics
        </Link>
        <Link
          href={"management"}
          className={`${
            pathname == "management" && "bg-[#242424] text-white"
          } py-1.5 px-3 rounded-md transition-transform hover:translate-x-1 cursor-pointer flex flex-row items-center gap-3`}
        >
          <FaUserEdit />
          Management
        </Link>
      </ul>
    </div>
  );
}
