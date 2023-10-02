export default function SideBar() {
  return (
    <div className="w-80 h-full bg-gray-50 p-4">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <ul className="flex flex-col gap-2 mt-4 ml-6 list-disc">
        <li className="bg-gray-200 py-1.5 px-3 rounded-md border-t border-gray-300 transition-transform hover:translate-x-1 cursor-pointer">
          Overview
        </li>
        <li className="bg-gray-200 py-1.5 px-3 rounded-md border-t border-gray-300 transition-transform hover:translate-x-1 cursor-pointer">
          Orders
        </li>
        <li className="bg-gray-200 py-1.5 px-3 rounded-md border-t border-gray-300 transition-transform hover:translate-x-1 cursor-pointer">
          Clients
        </li>
        <li className="bg-gray-200 py-1.5 px-3 rounded-md border-t border-gray-300 transition-transform hover:translate-x-1 cursor-pointer">
          Statistics
        </li>
        <li className="bg-gray-200 py-1.5 px-3 rounded-md border-t border-gray-300 transition-transform hover:translate-x-1 cursor-pointer">
          Management
        </li>
      </ul>
    </div>
  );
}
