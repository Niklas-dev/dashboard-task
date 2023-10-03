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
} from "recharts";

export default function StatisticsContainer({
  data,
}: StatisticsContainerProps) {
  return (
    <div className="flex flex-col  border-gray-200  cursor-pointer border-2 rounded-xl flex-grow h-[25rem] overflow-y-scroll overflow-x-hidden p-6">
      <div className="flex flex-row justify-between">
        <h3 className="text-xl font-semibold">Sale Statistic</h3>
        <div className="flex flex-row gap-4 h-fit text-lg font-medium">
          <select className="border-gray-300 border rounded-lg px-4 py-1.5 outline-none hover:bg-gray-50 transition-colors">
            <option>Last Month</option>
            <option>Last Year</option>
          </select>
          <button className="flex flex-row gap-2 items-center bg-primaryRed hover:bg-hoverRed transition-colors text-white px-5 py-2 rounded-lg">
            <FaDownload /> Download CV
          </button>
        </div>
      </div>
      <div className="w-[102%] h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ED1E79" stopOpacity={1} />
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.9} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-row justify-center items-center">
        <Link
          href={"/dashboard/statistics"}
          className="flex flex-row gap-2 items-center bg-primaryRed hover:bg-hoverRed transition-colors text-white px-5 py-2 rounded-lg"
        >
          See more Statistics
        </Link>
      </div>
    </div>
  );
}
