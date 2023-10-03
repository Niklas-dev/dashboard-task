import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function DashboardReturnButton() {
  return (
    <Link
      className={`bg-primaryRed bg-opacity-20 text-primaryRed hover:bg-opacity-30 transition-colors  font-medium text-lg  h-fit flex justify-center items-center gap-2 rounded-lg px-2.5 py-2 w-28 `}
      href={"/dashboard/overview"}
    >
      <FaArrowLeft /> Return
    </Link>
  );
}
