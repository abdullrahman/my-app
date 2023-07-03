"use client";
import React from "react";
import Navigation from "./navigation";
import { usePathname } from "next/navigation";
export default function MainNav() {
  const path = usePathname();
  const navigation = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Experience",
      href: "/experience",
    },
    {
      name: "Projects",
      href: "/projects",
    },
  ];
  return (
    <div>
      <Navigation nav={navigation} path={path} />
    </div>
  );
}
