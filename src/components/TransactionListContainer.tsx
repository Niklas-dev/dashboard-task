import { TransactionListProps } from "@/interfaces/interfaces";
import { Divide } from "hamburger-react";
import { FaChevronRight } from "react-icons/fa";
import TransactionRow from "./TransactionRow";
import TransactionTableHead from "./TransactionTableHead";

export default function TransactionListContainer({
  data,
}: TransactionListProps) {
  return (
    <div className="border-gray-200  cursor-pointer border-2 rounded-xl flex flex-col justify-start flex-grow h-[40rem] overflow-y-scroll overflow-x-hidden">
      <div className="flex flex-row justify-between items-center sticky top-0 bg-white  p-6 hover:bg-gray-50 transition-colors">
        <h3 className="font-semibold text-xl">Transaction List</h3>{" "}
        <FaChevronRight />
      </div>
      <table className="w-full text-sm text-left border-separate border-spacing-y-3 mt-5 p-3 md:p-6">
        <TransactionTableHead />
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
