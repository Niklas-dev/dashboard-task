import { TransactionRowProps } from "@/interfaces/interfaces";

export default function TransactionRow({ transaction }: TransactionRowProps) {
  return (
    <tr className=" cursor-pointer ">
      <th
        scope="row"
        className="px-2 md:px-6 py-4 font-medium  whitespace-nowrap  capitalize rounded-l-xl border-2 border-r-0 border-gray-200 h-20"
      >
        <p className="text-lg">{transaction.transaction.name}</p>
        <p className="text-base font-light">{transaction.transaction.id}</p>
      </th>
      <td className="px-6 py-4 capitalize border-t-2 text-lg border-b-2 border-gray-200  h-20">
        {transaction.amount} NOK
      </td>
      <td className="px-6 py-4 border-t-2 border-b-2 text-lg border-gray-200 md:flex hidden h-24  flex-row items-center">
        {transaction.date}
      </td>
      <td className="px-2 md:px-6 py-4 border-l-0 border-2 text-lg border-gray-200 rounded-r-xl h-20 ">
        <div
          className={`${
            (transaction.status == "Pending" && "bg-red-600 text-red-800") ||
            (transaction.status == "Done" && "bg-green-600 text-green-800") ||
            (transaction.status == "Ongoing" && "bg-yellow-400 text-yellow-600")
          } font-medium text-lg bg-opacity-20 text-center rounded-lg h-9 px-3 flex justify-center items-center`}
        >
          {transaction.status}
        </div>
      </td>
    </tr>
  );
}
