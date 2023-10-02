"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import DashboardSubRouteSelect from "./DashboardSubRouteSelect";
export default function SideBar() {
  const pathname = usePathname().substring(11); // get only relative path e.g. overview

  return (
    <div className="w-80 h-full bg-gray-50 p-4">
      <Link href={"/dashboard"} className="text-2xl font-semibold">
        Dashboard
      </Link>
      <ul className="flex flex-col gap-2 mt-4">
        <DashboardSubRouteSelect route="overview" currentPathname={pathname} />
        <DashboardSubRouteSelect route="orders" currentPathname={pathname} />
        <DashboardSubRouteSelect route="clients" currentPathname={pathname} />
        <DashboardSubRouteSelect
          route="statistics"
          currentPathname={pathname}
        />
        <DashboardSubRouteSelect
          route="management"
          currentPathname={pathname}
        />
      </ul>
    </div>
  );
}
