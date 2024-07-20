import DashboardMenu from "@/app/components/Dashboard/DashboardMenu";
import { Suspense } from "react";
import { Toaster } from "sonner";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="dashboard-container tracking-wider relative">
      <DashboardMenu />
      <Suspense fallback={<div><h1 className="text-5xl text-red-600 font-bold">LOADING</h1></div>}>
        {children}
      </Suspense>
      <Toaster
        className="fixed bottom-20 right-4 sm:bottom-40 xl:bottom-20"
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
