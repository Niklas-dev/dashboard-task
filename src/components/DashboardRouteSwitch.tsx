import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardRouteSwitch() {
  const pathname = usePathname();
  return (
    <div className="flex flex-row items-center gap-2 bg-white border border-gray-200 w-fit p-1 h-12 shadow-md rounded-xl mt-6">
      <Link
        className={`${
          pathname == "/dashboard/overview"
            ? "bg-opacity-20 text-primaryRed"
            : "bg-opacity-0 text-black"
        } bg-primaryRed  font-medium text-lg  h-full flex justify-center items-center rounded-lg px-2`}
        href={"/dashboard/overview"}
      >
        Overview
      </Link>
      <Link
        className={`${
          pathname == "/dashboard/transactions"
            ? "bg-opacity-20 text-primaryRed"
            : "bg-opacity-0 text-black"
        } bg-primaryRed  font-medium text-lg  h-full flex justify-center items-center rounded-lg px-2`}
        href={"/dashboard/transactions"}
      >
        Transaction List
      </Link>
    </div>
  );
}
