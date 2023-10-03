import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { UserProfileAvatarProps } from "@/interfaces/interfaces";
export default function UserProfileAvatar({ image }: UserProfileAvatarProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      <Image
        className="rounded-full h-10 w-10"
        height={100}
        width={100}
        alt="avatar"
        src={image}
      />
      <FaChevronDown />
    </div>
  );
}
