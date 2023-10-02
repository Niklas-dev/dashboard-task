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
    service: "Test Ser3",
    profit: 1000,
    image: Avatar,
    status: "Ongoing",
  },
];
