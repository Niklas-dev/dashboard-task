import { FaChevronRight } from "react-icons/fa";

import { PerformanceListProps } from "@/interfaces/interfaces";
import PerformanceRow from "./PerformanceRow";
import PerformanceTableHead from "./PerformanceTableHead";
import ListHeader from "./ListHeader";

export default function PerformanceList({ data }: PerformanceListProps) {
  return (
    <div className="border-gray-200  cursor-pointer border-2 rounded-xl flex flex-col justify-start flex-grow md:flex-shrink h-[40rem] overflow-y-scroll overflow-x-hidden">
      <ListHeader name="Performance List (Monthly)" route="performances" />
      <table className="w-full text-sm text-left border-separate border-spacing-y-3 mt-5 p-3 md:p-6 ">
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
