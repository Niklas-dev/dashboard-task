import { FaChevronRight } from "react-icons/fa";

import { PerformanceListProps } from "@/interfaces/interfaces";
import PerformanceRow from "./PerformanceRow";
import PerformanceTableHead from "./PerformanceTableHead";

export default function PerformanceList({ data }: PerformanceListProps) {
  return (
    <div className="border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer border-2 rounded-xl p-6 flex flex-col justify-between flex-grow">
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-semibold text-xl">Top Performance (Monthly)</h3>{" "}
        <FaChevronRight />
      </div>
      <table className="w-full text-sm text-left border-separate border-spacing-y-3 mt-5  ">
        <PerformanceTableHead />
        <tbody className="">
          {data.length >= 1 ? (
            data.map((performance) => (
              <PerformanceRow
                key={performance.service}
                performance={performance}
              />
            ))
          ) : (
            <div className="pl-3">No Transactions</div>
          )}
        </tbody>
      </table>
    </div>
  );
}
