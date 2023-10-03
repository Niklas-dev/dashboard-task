import { FooterSocialLinkProps } from "@/interfaces/interfaces";

export default function FooterSocialLink({
  route,
  name,
  Icon,
}: FooterSocialLinkProps) {
  return (
    <a
      target="_blank"
      href={route}
      className="flex flex-row gap-3 items-center hover:underline"
    >
      <Icon />
      {name}
    </a>
  );
}
