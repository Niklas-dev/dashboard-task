import { FooterLinkWrapperProps } from "@/interfaces/interfaces";

export default function FooterLinkWrapper({
  children,
  name,
}: FooterLinkWrapperProps) {
  return (
    <div className="flex flex-col gap-6 text-lg">
      <h4 className="text-lg font-bold">{name}</h4>
      <div className="flex flex-col gap-3 text-lg font-normal ">{children}</div>
    </div>
  );
}
