export default function TransactionTableHead() {
  return (
    <thead className="text-base text-black bg-gray-100 ">
      <tr>
        <th scope="col" className="px-6 py-3 rounded-l-xl text-lg font-medium">
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
  );
}
