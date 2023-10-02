import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-screen bg-gray-100">
      <div className="w-96 h-80  shadow-md rounded-xl p-4 bg-white ring-primaryRed ring-2 flex flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-center text-primaryRed font-medium">
            Welcome to my task
          </h1>
          <p className="text-center text-textGray mt-6">
            When you click the button below you will get to the dashboard page.
          </p>
          <Link
            className="bg-primaryRed rounded-lg text-lg text-white px-3 py-2.5 mt-4 transition-colors hover:bg-hoverRed"
            href={"/dashboard"}
          >
            To Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
