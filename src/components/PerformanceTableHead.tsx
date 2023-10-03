export default function PerformanceTableHead() {
  return (
    <thead className="text-base text-black bg-gray-100   sticky top-24">
      <tr>
        <th scope="col" className="px-6 py-3 rounded-l-xl text-lg font-medium">
          Service
        </th>
        <th scope="col" className="px-6 py-3 text-lg font-medium">
          Profit
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
