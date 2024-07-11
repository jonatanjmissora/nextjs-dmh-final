import DashboardMenu from "@/app/components/Dashboard/DashboardMenu";
import { Toaster } from "sonner";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="dashboard-container tracking-wider relative">
      <DashboardMenu />
      {children}
      <Toaster
        className="fixed bottom-[2rem] right-0"
        toastOptions={{
          classNames: {
            error: 'bg-red-400',
            success: 'bg-green-400',
          },
        }}
      />
    </section>
  );
}
