import { TransactionListProps } from "@/interfaces/interfaces";
import { Divide } from "hamburger-react";
import { FaChevronRight } from "react-icons/fa";
import TransactionRow from "./TransactionRow";

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
              <TransactionRow
                key={transaction.transaction.id}
                transaction={transaction}
              />
            ))
          ) : (
            <div className="pl-3">No Transactions</div>
          )}
        </tbody>
      </table>
    </div>
  );
}
