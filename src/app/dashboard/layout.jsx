"use client";
import DashboardNav from "./common/nav/dashboardNav";

export default function DashboardLayout({ children }) {
  return (
    <>
      <DashboardNav />
      <div>
        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}
