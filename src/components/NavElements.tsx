"use client";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useState } from "react";

export default function NavElements() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className="lg:hidden absolute top-3 left-3 z-20">
        <Hamburger onToggle={setShowNav} />
      </div>
      {showNav && (
        <div className="flex lg:hidden w-56 rounded-br-xl shadow-md  absolute bg-white lg:bg-transparent top-0 left-0 lg:relative flex-col  items-start  gap-14 p-4">
          <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-8 text-lg font-medium mt-16 pb-4 pl-2">
            <Link className="hover:underline" href={"/home"}>
              Home
            </Link>
            <Link className="hover:underline" href={"/dashboard"}>
              Dashboard
            </Link>
            <Link className="hover:underline" href={"/info"}>
              Info
            </Link>
          </ul>
        </div>
      )}
      <div className="lg:flex hidden   rounded-br-xl bg-gray-200 lg:bg-transparent top-0 left-0 flex-row items-center gap-14 p-0">
        <Link
          className="bg-primaryRed text-white px-3 py-2.5 rounded-xl text-xl font-medium "
          href={"/"}
        >
          evvent.
        </Link>

        <ul className="flex flex-row items-center gap-10 text-lg font-medium">
          <Link className="hover:underline" href={"/home"}>
            Home
          </Link>
          <Link className="hover:underline" href={"/dashboard"}>
            Dashboard
          </Link>
          <Link className="hover:underline" href={"/info"}>
            Info
          </Link>
        </ul>
      </div>
    </>
  );
}
