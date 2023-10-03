import { ListHeaderProps } from "@/interfaces/interfaces";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function ListHeader({ name, route }: ListHeaderProps) {
  return (
    <Link
      href={`/dashboard/${route}`}
      className="flex flex-row justify-between items-center sticky top-0 bg-white p-6 hover:bg-gray-50 transition-colors"
    >
      <h3 className="font-semibold text-xl">{name}</h3> <FaChevronRight />
    </Link>
  );
}
