import { React } from "react";
import { usePathname } from "next/navigation";
import Navigation from "./navigation";
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function DashboardNav() {
  const path = usePathname();
  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: false },
    {
      name: "Information",
      href: "/dashboard/info",
      icon: UsersIcon,
      current: false,
    },
    {
      name: "Certifications",
      href: "/dashboard/certificate",
      icon: FolderIcon,
      current: false,
    },
    {
      name: "Skils",
      href: "/dashboard/skils",
      icon: CalendarIcon,
      current: false,
    },
    {
      name: "Projects",
      href: "/dashboard/projects",
      icon: DocumentDuplicateIcon,
      current: false,
    },
    {
      name: "Experience",
      href: "/dashboard/experience",
      icon: ChartPieIcon,
      current: false,
    },
    {
      name: "Social Media",
      href: "/dashboard/socialMedia",
      icon: ChartPieIcon,
      current: false,
    },
  ];
  return (
    <Navigation path={path} navigation={navigation} classes={classNames} />
  );
}
