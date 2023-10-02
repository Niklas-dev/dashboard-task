import NavBar from "@/components/NavBar";
import "../../styles/globals.css";
import type { Metadata } from "next";
import SideBar from "@/components/SideBar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "The Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="absolute w-screen">
          <NavBar />
        </header>
        <div className="flex flex-row h-screen w-screen pt-20">
          <SideBar />
          <main className="p-2">{children}</main>
        </div>
      </body>
    </html>
  );
}
