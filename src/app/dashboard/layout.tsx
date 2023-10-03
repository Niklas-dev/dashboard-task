import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col overflow-x-hidden">
      <div className="flex flex-row h-screen w-screen ">
        <SideBar />
        <main className="w-screen overflow-x-hidden">
          <header className="w-full">
            <NavBar />
          </header>
          <div className="px-4">{children}</div>
        </main>
      </div>
      <Footer />
    </section>
  );
}
