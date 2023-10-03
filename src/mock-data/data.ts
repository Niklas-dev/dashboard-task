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
    profit: 1002,
    image: Avatar,
    status: "Done",
  },
  {
    service: "Test Ser1",
    profit: 921,
    image: Avatar,
    status: "Ongoing",
  },
  {
    service: "Test Ser2",
    profit: 1870,
    image: Avatar,
    status: "Pending",
  },
  {
    service: "Test Ser4",
    profit: 1992,
    image: Avatar,
    status: "Ongoing",
  },
  {
    service: "Test Ser5",
    profit: 1010,
    image: Avatar,
    status: "Ongoing",
  },
  {
    service: "Test Ser6",
    profit: 3000,
    image: Avatar,
    status: "Ongoing",
  },
  {
    service: "Test Ser7",
    profit: 2000,
    image: Avatar,
    status: "Ongoing",
  },
];

export const statData = [
  {
    name: "17-24 Sep 2023",
    week: "Week 1",
    Income: 50000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "17-24 Sep 2023",
    week: "Week 2",
    Income: 38000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "17-24 Sep 2023",
    week: "Week 3",
    Income: 37000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "17-24 Sep 2023",
    week: "Week 4",
    Income: 45000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "17-24 Sep 2023",
    week: "Week 5",
    Income: 42000,
    pv: 2400,
    amt: 2400,
  },
];
