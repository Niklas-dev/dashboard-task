"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavElements() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className="lg:flex hidden   rounded-br-xl bg-gray-200 bg-transparent top-0 left-0 flex-row items-center gap-14 p-0">
        <ul className="flex flex-row items-center gap-10 text-lg font-medium">
          <Link className="hover:underline" href={"/"}>
            Homepage
          </Link>
          <Link className="hover:underline" href={"/explore"}>
            Explore
          </Link>
          <Link className="hover:underline" href={"/about"}>
            About Evvent
          </Link>
        </ul>
      </div>
    </>
  );
}
