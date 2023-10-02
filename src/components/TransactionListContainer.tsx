import { TransactionListProps } from "@/interfaces/interfaces";
import { Divide } from "hamburger-react";
import { FaChevronRight } from "react-icons/fa";

export default function TransactionListContainer({
  data,
}: TransactionListProps) {
  return (
    <div className="border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer border-2 rounded-xl p-6 flex flex-col justify-between flex-grow">
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-semibold text-xl">Transaction List</h3>{" "}
        <FaChevronRight />
      </div>
      <table className="w-full text-sm text-left border-separate border-spacing-y-3 mt-5">
        <thead className="text-base text-black bg-gray-100   ">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 rounded-l-xl text-lg font-medium"
            >
              Transaction
            </th>
            <th scope="col" className="px-6 py-3 text-lg font-medium">
              Amount
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-lg font-medium md:block hidden"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 rounded-r-xl text-lg font-medium text-center"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className="">
          {data.length >= 1 ? (
            data.map((transaction) => (
              <tr key={transaction.transaction.id} className=" cursor-pointer ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  capitalize rounded-l-xl border-2 border-r-0 border-gray-200 h-20"
                >
                  <p className="text-lg">{transaction.transaction.name}</p>
                  <p className="text-base font-light">
                    {transaction.transaction.id}
                  </p>
                </th>
                <td className="px-6 py-4 capitalize border-t-2 text-lg border-b-2 border-gray-200  h-20">
                  {transaction.amount} NOK
                </td>
                <td className="px-6 py-4 border-t-2 border-b-2 text-lg border-gray-200 md:flex hidden h-24  flex-row items-center">
                  {transaction.date}
                </td>
                <td className="px-6 py-4 border-l-0 border-2 text-lg border-gray-200 rounded-r-xl h-20 ">
                  <div
                    className={`${
                      (transaction.status == "Pending" &&
                        "bg-red-600 text-red-800") ||
                      (transaction.status == "Done" &&
                        "bg-green-600 text-green-800") ||
                      (transaction.status == "Ongoing" &&
                        "bg-yellow-400 text-yellow-600")
                    } font-medium text-lg bg-opacity-20 text-center rounded-lg h-9 px-3 flex justify-center items-center`}
                  >
                    {transaction.status}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <div className="pl-3">No Transactions</div>
          )}
        </tbody>
      </table>
    </div>
  );
}
