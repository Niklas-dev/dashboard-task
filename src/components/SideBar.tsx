"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import DashboardSubRouteSelect from "./DashboardSubRouteSelect";
import {
  FaChartLine,
  FaHome,
  FaShoppingBag,
  FaUserEdit,
  FaUsers,
} from "react-icons/fa";
export default function SideBar() {
  const pathname = usePathname().substring(11); // get only relative path e.g. overview

  return (
    <div className="w-80 h-full bg-gray-50 p-4">
      <Link href={"/dashboard"} className="text-2xl font-semibold">
        Dashboard
      </Link>
      <ul className="flex flex-col gap-2 mt-4 font-medium">
        <DashboardSubRouteSelect
          route="overview"
          currentPathname={pathname}
          Icon={FaHome}
        />
        <DashboardSubRouteSelect
          route="orders"
          currentPathname={pathname}
          Icon={FaShoppingBag}
        />
        <DashboardSubRouteSelect
          route="clients"
          currentPathname={pathname}
          Icon={FaUsers}
        />
        <DashboardSubRouteSelect
          route="statistics"
          currentPathname={pathname}
          Icon={FaChartLine}
        />
        <DashboardSubRouteSelect
          route="management"
          currentPathname={pathname}
          Icon={FaUserEdit}
        />
      </ul>
    </div>
  );
}
