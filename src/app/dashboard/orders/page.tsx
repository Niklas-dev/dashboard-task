import DashboardReturnButton from "@/components/DashboardReturnButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Orders",
  description: "The Sub Page Orders",
};

export default function Page() {
  return (
    <div className="p-2 flex flex-col gap-5 pb-8">
      <h1 className="text-4xl font-semibold mt-20">Dashboard - My Orders</h1>
      <DashboardReturnButton />
    </div>
  );
}
