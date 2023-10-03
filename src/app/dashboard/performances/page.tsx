import DashboardReturnButton from "@/components/DashboardReturnButton";
import PerformanceListContainer from "@/components/PerformanceListContainer";
import { performanceData } from "@/mock-data/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Performances",
  description: "The Sub Page Performances",
};
export default function Page() {
  return (
    <div className="p-2 flex flex-col gap-5 pb-8">
      <h1 className="text-4xl font-semibold mt-20">Dashboard - Performances</h1>
      <DashboardReturnButton />
      <PerformanceListContainer data={performanceData} />
    </div>
  );
}
