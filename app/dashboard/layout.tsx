import Sidebar from "@/components/dashboard/Sidebar";
import MobileTopBar from "@/components/dashboard/MobileTopBar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <MobileTopBar />
        <DashboardNavbar />
        <main className="flex-1 overflow-y-auto pb-20 md:pb-0">{children}</main>
      </div>
    </div>
  );
}
