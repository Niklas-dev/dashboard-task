import { IconType } from "react-icons";

export interface DashboardSubRouteSelectProps {
  name: string;
  Icon: IconType;
  route: string;
  currentPathname: string;
}
