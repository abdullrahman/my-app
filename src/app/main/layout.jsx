import React from "react";
import MainNav from "./common/nav/mainNav";
export default function MainLayout({ children }) {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <MainNav />
        {children}
      </div>
    </div>
  );
}
