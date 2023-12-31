import Link from "next/link";

export default function NavElements() {
  return (
    <>
      <div className="xl:flex hidden lg:pl-11   rounded-br-xl bg-gray-200 bg-transparent top-0 left-0 flex-row items-center gap-14 p-0">
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
