import SVGSpinner from "@/app/assets/SVG/SVGSpinner";
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
      <Suspense fallback={<div className="dashboard-content-container backdrop-blur flex items-center justify-center"><SVGSpinner className="size-20 text-primary" /></div>}>
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
