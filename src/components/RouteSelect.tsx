import { RouteSelectProps } from "@/interfaces/interfaces";
import Link from "next/link";

export default function RouteSelect({ Icon, name, route }: RouteSelectProps) {
  return (
    <div className="w-56 ">
      <button
        className={`text-black px-4 py-2 w-full flex flex-row justify-between flex-nowrap items-center gap-3 rounded-xl  text-2xl font-medium`}
      >
        <Link
          href={
            route == "logout" ||
            route == "" ||
            route == "explore" ||
            route == "about"
              ? `/${route}`
              : `/dashboard/${route}`
          }
          className="flex flex-row items-center gap-3 hover:underline"
        >
          <Icon /> {name}
        </Link>{" "}
      </button>
    </div>
  );
}
