"use client";
import DashboardInfoContainer from "@/components/DashboardInfoContainer";
import DashboardRouteSwitch from "@/components/DashboardRouteSwitch";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  return (
    <div className="p-2">
      <h1 className="text-4xl font-semibold mt-20">Dashboard</h1>
      <DashboardRouteSwitch />
      <div className="mt-12">
        <DashboardInfoContainer
          name="Active Services"
          amount={24}
          lastMonth={15}
          trend={+60}
        />
        <DashboardInfoContainer
          name="Total Active Booking"
          amount={10}
          lastMonth={15}
          trend={-33}
        />
      </div>
    </div>
  );
}
