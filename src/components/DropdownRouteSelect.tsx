import { DropdownRouteSelectProps } from "@/interfaces/interfaces";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaChartPie, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function DropdownRouteSelect({
  Icon,
  routes,
  name,
  children,
}: DropdownRouteSelectProps) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-56 ">
      <button
        onClick={() => setExpanded((_prev) => !_prev)}
        className={`${
          pathname == routes[0] || pathname == routes[1]
            ? "bg-black text-white "
            : "text-black "
        } px-4 py-2 w-full flex flex-row justify-between flex-nowrap items-center gap-3 rounded-xl text-2xl font-medium`}
      >
        <div className="flex flex-row items-center gap-3">
          <Icon /> {name}
        </div>{" "}
        {expanded ? (
          <FaChevronUp size={"1rem"} />
        ) : (
          <FaChevronDown size={"1rem"} />
        )}
      </button>
      {expanded && (
        <ul className="flex flex-col pl-4 text-lg mt-2">{children}</ul>
      )}
    </div>
  );
}
