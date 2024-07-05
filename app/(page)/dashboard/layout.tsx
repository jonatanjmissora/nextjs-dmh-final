import DashboardMenu from "@/app/components/Dashboard/DashboardMenu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="dashboard-container tracking-wider">
      <DashboardMenu />
      {children}
    </section>
  );
}
