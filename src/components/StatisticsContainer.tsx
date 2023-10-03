import { StatisticsContainerProps } from "@/interfaces/interfaces";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  PolarGrid,
  Line,
} from "recharts";
import StatisticsChart from "./StatisticsChart";

export default function StatisticsContainer({
  data,
}: StatisticsContainerProps) {
  return (
    <div className="flex flex-col  border-gray-200  cursor-pointer border-2 rounded-xl flex-grow h-fit overflow-y-scroll overflow-x-hidden p-6 ">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-xl font-semibold">Sale Statistic</h3>
        <div className="flex lg:flex-row flex-col-reverse gap-4 h-fit text-lg font-medium">
          <select className="border-gray-300 border rounded-lg px-4 py-1.5 outline-none hover:bg-gray-50 transition-colors">
            <option>Last Month</option>
            <option>Last Year</option>
          </select>
          <button className="flex flex-row gap-2 items-center bg-primaryRed hover:bg-hoverRed transition-colors text-white px-5 py-2 rounded-lg whitespace-nowrap">
            <div className="hidden md:block">
              <FaDownload />
            </div>{" "}
            Download CV
          </button>
        </div>
      </div>
      <div className="w-[102%] h-72 mt-10">
        <StatisticsChart data={data} />
      </div>
      <div className="flex flex-row justify-center items-center mt-8">
        <Link
          href={"/dashboard/statistics"}
          className="flex flex-row gap-2 items-center border-primaryRed border hover:bg-hoverRed hover:bg-opacity-20 transition-colors text-primaryRed px-5 py-2 rounded-lg font-semibold"
        >
          See more Statistics
        </Link>
      </div>
    </div>
  );
}
