import { FooterSiteLinkProps } from "@/interfaces/interfaces";
import Link from "next/link";

export default function FooterSiteLink({ route, name }: FooterSiteLinkProps) {
  return (
    <Link
      href={`/${route}`}
      className="flex flex-row gap-3 items-center text-base hover:underline"
    >
      {name}
    </Link>
  );
}
