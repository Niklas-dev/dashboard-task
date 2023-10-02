import { MyProfileButtonProps } from "@/interfaces/interfaces";
import Link from "next/link";
import Image from "next/image";
export default function MyProfileButton({ image }: MyProfileButtonProps) {
  return (
    <div className="mt-8 w-56 ">
      <button
        className={`text-black px-4 py-2 w-full flex flex-row justify-between flex-nowrap items-center gap-3 rounded-xl  text-2xl font-medium`}
      >
        <Link
          href={`/dashboard/profile`}
          className="flex flex-row items-center gap-3"
        >
          <Image
            className="h-7 w-7 rounded-full"
            height={50}
            width={50}
            src={image}
            alt="avatar"
          />{" "}
          My Profile
        </Link>{" "}
      </button>
    </div>
  );
}
