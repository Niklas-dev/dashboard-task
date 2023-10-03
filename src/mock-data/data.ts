import { PerformanceData, TransactionData } from "@/interfaces/interfaces";
import Avatar from "../assets/avatar.png";
export const transactionData: TransactionData[] = [
  {
    transaction: {
      name: "Sophie",
      id: "234-342-222",
    },
    amount: 1000,
    status: "Ongoing",
    date: "20. Sep 2023",
  },
  {
    transaction: {
      name: "Sophie",
      id: "234-342-223",
    },
    amount: 1000,
    status: "Done",
    date: "20. Sep 2023",
  },
  {
    transaction: {
      name: "Sophie",
      id: "234-342-224",
    },
    amount: 1000,
    status: "Pending",
    date: "20. Sep 2023",
  },
  {
    transaction: {
      name: "Sophie",
      id: "234-343-224",
    },
    amount: 1000,
    status: "Pending",
    date: "20. Sep 2023",
  },
  {
    transaction: {
      name: "Sophie",
      id: "234-352-224",
    },
    amount: 1000,
    status: "Pending",
    date: "20. Sep 2023",
  },
  {
    transaction: {
      name: "Sophie",
      id: "234-312-224",
    },
    amount: 1000,
    status: "Pending",
    date: "20. Sep 2023",
  },
];

export const performanceData: PerformanceData[] = [
  {
    service: "Test Ser",
    profit: 1000,
    image: Avatar,
    status: "Done",
  },
  {
    service: "Test Ser1",
    profit: 1000,
    image: Avatar,
    status: "Ongoing",
  },
  {
    service: "Test Ser2",
    profit: 1000,
    image: Avatar,
    status: "Pending",
  },
  {
    service: "Test Ser4",
    profit: 1000,
    image: Avatar,
    status: "Ongoing",
  },
  {
    service: "Test Ser5",
    profit: 1000,
    image: Avatar,
    status: "Ongoing",
  },
  {
    service: "Test Ser6",
    profit: 1000,
    image: Avatar,
    status: "Ongoing",
  },
  {
    service: "Test Ser7",
    profit: 1000,
    image: Avatar,
    status: "Ongoing",
  },
];

export const statData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
