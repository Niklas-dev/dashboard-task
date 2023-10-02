"use client";
import DashboardRouteSwitch from "@/components/DashboardRouteSwitch";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  return (
    <div className="p-2 flex flex-col gap-5">
      <h1 className="text-4xl font-semibold mt-20">Dashboard</h1>
      <DashboardRouteSwitch />
    </div>
  );
}
