import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logged Out",
  description: "Logged Out",
};

export default function Page() {
  return <div className="p-2 flex flex-col gap-5 pb-8">Logged Out</div>;
}
