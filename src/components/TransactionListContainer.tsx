import { TransactionListProps } from "@/interfaces/interfaces";
import TransactionRow from "./TransactionRow";
import TransactionTableHead from "./TransactionTableHead";
import ListHeader from "./ListHeader";

export default function TransactionListContainer({
  data,
}: TransactionListProps) {
  return (
    <div className="border-gray-200  cursor-pointer border-2 rounded-xl flex flex-col justify-start flex-grow h-[40rem] overflow-y-scroll overflow-x-hidden">
      <ListHeader name="Transaction List" route="transactions" />
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
