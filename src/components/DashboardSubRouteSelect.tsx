import { DashboardSubRouteSelectProps } from "@/interfaces/interfaces";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function DashboardSubRouteSelect({
  name,
  Icon,
  route,
  currentPathname,
}: DashboardSubRouteSelectProps) {
  return (
    <Link
      href={`/dashboard/${route}`}
      className={`${
        currentPathname == route && "bg-[#242424] text-white"
      } py-1.5 px-3 rounded-md transition-transform hover:translate-x-1 cursor-pointer flex flex-row items-center gap-3 capitalize`}
    >
      <Icon />
      {name}
    </Link>
  );
}
