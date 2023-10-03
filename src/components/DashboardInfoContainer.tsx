import { DashboardInfoContainerProps } from "@/interfaces/interfaces";
import Link from "next/link";
import { FaChartLine, FaChevronRight } from "react-icons/fa";

export default function DashboardInfoContainer({
  route,
  name,
  amount,
  lastMonth,
  trend,
}: DashboardInfoContainerProps) {
  return (
    <Link
      href={`/dashboard/${route}`}
      className="border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer border-2 w-96 h-48 rounded-xl p-6 flex flex-col justify-between"
    >
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-semibold text-xl">{name}</h3> <FaChevronRight />
      </div>
      <div className="flex flex-row justify-between items-center mt-5">
        <div className="flex flex-row justify-start items-center gap-2 text-xl font-semibold">
          <span className="text-3xl font-semibold">{amount}</span> Services
        </div>
        <span
          className={`${
            trend >= 0
              ? "bg-green-600 text-green-900"
              : "bg-red-600 text-red-900"
          } font-medium bg-opacity-30 w-fit px-4 h-9 rounded-lg flex flex-row justify-center items-center gap-2`}
        >
          <FaChartLine /> {trend >= 0 && "+"}
          {trend}%
        </span>
      </div>
      <div className="flex flex-row justify-start items-center text-lg">
        <span className="flex flex-row justify-start items-center gap-2">
          Last Month <p className="font-bold"> {lastMonth}</p>
        </span>
      </div>
    </Link>
  );
}
