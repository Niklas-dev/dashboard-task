
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard | Orders",
  description: "The Sub Page Orders",
};

const data = [
  { id: 0, value: 10, label: "series A" },
  { id: 1, value: 15, label: "series B" },
  { id: 2, value: 20, label: "series C" },
];

export default function Page() {
  return <div></div>;
}
