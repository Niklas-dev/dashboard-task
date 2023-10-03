import DashboardRouteSwitch from "@/components/DashboardRouteSwitch";
import PerformanceListContainer from "@/components/PerformanceListContainer";

import { performanceData } from "@/mock-data/data";
import { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Dashboard | Performances",
  description: "The Sub Page Performances",
};
export default function Page() {
  return (
    <div className="p-2 flex flex-col gap-5 pb-8">
      <h1 className="text-4xl font-semibold mt-20">Dashboard - Performances</h1>
      <Link
        className={`bg-primaryRed bg-opacity-20 text-primaryRed hover:bg-opacity-30 transition-colors  font-medium text-lg  h-fit flex justify-center items-center gap-2 rounded-lg px-2.5 py-2 w-28 `}
        href={"/dashboard/transactions"}
      >
        <FaArrowLeft /> Return
      </Link>
      <PerformanceListContainer data={performanceData} />
    </div>
  );
}
