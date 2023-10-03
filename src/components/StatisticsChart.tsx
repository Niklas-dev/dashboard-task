"use client";
import { StatisticsChartProps } from "@/interfaces/interfaces";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";

export default function StatisticsChart({ data }: StatisticsChartProps) {
  return (
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
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="5 3" />
        <XAxis dataKey="week" />

        <YAxis />
        <Tooltip />

        <Area
          unit=" NOK"
          type="monotone"
          dataKey="Income"
          stroke="#ED1E79"
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
