import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface DropdownRouteSelectProps {
  Icon: IconType;
  routes: [string, string];
  name: string;
  children: React.ReactNode[];
}

export interface RouteSelectProps {
  Icon: IconType;
  name: string;
  route: string;
}

export interface MyProfileButtonProps {
  image: StaticImageData;
}

export interface DashboardInfoContainerProps {
  route: string;
  name: string;
  amount: string;
  trend: number;
  lastMonth: number;
}

export interface TransactionListProps {
  data: TransactionData[];
}

export interface TransactionRowProps {
  transaction: TransactionData;
}

export interface TransactionData {
  transaction: {
    name: string;
    id: string;
  };
  amount: number;
  date: string;
  status: string;
}

export interface PerformanceListProps {
  data: PerformanceData[];
}

export interface PerformanceData {
  service: string;
  image: StaticImageData;
  status: string;
  profit: number;
}

export interface PerformanceRowProps {
  performance: PerformanceData;
}
export interface ListHeaderProps {
  name: string;
  route: string;
}

export interface StatisticsContainerProps {
  data: object[];
}
