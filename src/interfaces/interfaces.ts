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
  name: string;
  amount: string;
  trend: number;
  lastMonth: number;
}

export interface TransactionListProps {
  data: TransactionData[];
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
