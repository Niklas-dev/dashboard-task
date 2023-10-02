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
        <div className="flex flex-row h-screen w-screen">
          <SideBar />
          <main className="w-screen">
            <header className="w-full">
              <NavBar />
            </header>
            <div className="px-4">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
