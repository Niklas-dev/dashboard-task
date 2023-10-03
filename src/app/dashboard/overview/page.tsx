"use client";
import DashboardIncomeInfoContainer from "@/components/DashboardIncomeInfoContainer";
import DashboardInfoContainer from "@/components/DashboardInfoContainer";
import DashboardRouteSwitch from "@/components/DashboardRouteSwitch";
import PerformanceListContainer from "@/components/PerformanceListContainer";
import StatisticsContainer from "@/components/StatisticsContainer";
import TransactionListContainer from "@/components/TransactionListContainer";
import { performanceData, statData, transactionData } from "@/mock-data/data";
import { Metadata } from "next";

export default function Page() {
  return (
    <div className="p-2 flex flex-col gap-5">
      <h1 className="text-4xl font-semibold mt-20">Dashboard</h1>
      <DashboardRouteSwitch />
      <div className="mt-12 flex flex-row flex-wrap gap-6">
        <DashboardInfoContainer
          name="Active Services"
          amount={"24"}
          lastMonth={15}
          trend={+60}
        />
        <DashboardInfoContainer
          name="Total Active Booking"
          amount={"10"}
          lastMonth={15}
          trend={-33}
        />
        <DashboardIncomeInfoContainer
          name="Total Income"
          amount={"50k"}
          lastMonth={25000}
          trend={50}
        />
      </div>
      <div className="flex flex-row flex-wrap justify-between gap-6 pr-2 md:pr-10 lg:pr-28">
        <TransactionListContainer data={transactionData} />
        <PerformanceListContainer data={performanceData} />
      </div>
      <div className="flex flex-col pr-2 md:pr-10 lg:pr-28 pb-8">
        <StatisticsContainer data={statData} />
      </div>
    </div>
  );
}
