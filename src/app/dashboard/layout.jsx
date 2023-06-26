"use client";
import DashboardNav from "./common/nav/dashboardNav";
import { LoadingContextProvider } from "./context/loadingContext";
export default function DashboardLayout({ children }) {
  return (
    <LoadingContextProvider>
      <DashboardNav />
      <div>
        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </LoadingContextProvider>
  );
}
