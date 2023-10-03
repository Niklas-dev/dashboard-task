import { FaChevronRight } from "react-icons/fa";

import { PerformanceListProps } from "@/interfaces/interfaces";
import PerformanceRow from "./PerformanceRow";
import PerformanceTableHead from "./PerformanceTableHead";

export default function PerformanceList({ data }: PerformanceListProps) {
  return (
    <div className="border-gray-200  cursor-pointer border-2 rounded-xl flex flex-col justify-start flex-grow h-[40rem] overflow-y-scroll">
      <div className="flex flex-row justify-between items-center sticky top-0 bg-white h-20 p-6 hover:bg-gray-50 transition-colors">
        <h3 className="font-semibold text-xl">Transaction List</h3>{" "}
        <FaChevronRight />
      </div>
      <table className="w-full text-sm text-left border-separate border-spacing-y-3 mt-5 p-6 ">
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
