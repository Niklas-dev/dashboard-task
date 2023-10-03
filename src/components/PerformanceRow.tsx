import { PerformanceRowProps } from "@/interfaces/interfaces";
import Image from "next/image";

export default function PerformanceRow({ performance }: PerformanceRowProps) {
  return (
    <tr className=" cursor-pointer ">
      <th
        scope="row"
        className="px-2 md:px-6 py-4 font-medium  whitespace-nowrap  capitalize rounded-l-xl border-2 border-r-0 border-gray-200 h-24 flex flex-row items-center gap-2"
      >
        <Image
          className="h-14 w-14 rounded-lg hidden md:block"
          height={50}
          width={50}
          alt="service"
          src={performance.image}
        />
        <p className="text-lg">{performance.service}</p>
      </th>
      <td className="px-6 py-4 capitalize border-t-2 text-lg border-b-2 border-gray-200  h-20 text-green-600">
        {performance.profit} NOK
      </td>

      <td className="px-2 md:px-6 py-4 border-l-0 border-2 text-lg border-gray-200 rounded-r-xl h-20 ">
        <div
          className={`${
            (performance.status == "Pending" && "bg-red-600 text-red-800") ||
            (performance.status == "Done" && "bg-green-600 text-green-800") ||
            (performance.status == "Ongoing" && "bg-yellow-400 text-yellow-600")
          } font-medium text-lg bg-opacity-20 text-center rounded-lg h-9 px-3 flex justify-center items-center`}
        >
          {performance.status}
        </div>
      </td>
    </tr>
  );
}
