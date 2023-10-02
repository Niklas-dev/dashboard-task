import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface DashboardSubRouteSelectProps {
  name: string;
  Icon: IconType;
  route: string;
  currentPathname: string;
}

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
