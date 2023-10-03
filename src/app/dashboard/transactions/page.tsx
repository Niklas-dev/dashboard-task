import DashboardRouteSwitch from "@/components/DashboardRouteSwitch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Transactions",
  description: "The Sub Page Transactions",
};
export default function Page() {
  return (
    <div className="p-2 flex flex-col gap-5">
      <h1 className="text-4xl font-semibold mt-20">Dashboard</h1>
      <DashboardRouteSwitch />
    </div>
  );
}
