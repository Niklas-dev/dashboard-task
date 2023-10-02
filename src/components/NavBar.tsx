import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex flex-row justify-between py-4 px-6 border-b-2 border-gray-200 drop-shadow-sm">
      <div className="flex flex-row items-center gap-14">
        <Link
          className="bg-primaryRed text-white px-3 py-2.5 rounded-xl text-xl font-medium"
          href={"/"}
        >
          EVVENT
        </Link>
        <ul className="flex flex-row items-center gap-10 text-lg">
          <li>Home</li>
          <li>Dashboard</li>
        </ul>
      </div>
      <div className="flex flex-row items-start">
        <button></button>
        <button></button>
        <button></button>
        <div className="h-14 w-14 rounded-full bg-green-700"></div>
      </div>
    </nav>
  );
}
