"use client";
import React from "react";
import InfoForm from "../components/infoForm";
import { useParams } from "next/navigation";
export default async function page() {
  const route = useParams();
  const userData = async () => {
    const res = await fetch(
      `http://localhost:3000/dashboard/info/${route.id}/api`
    );
    return res.json();
  };
  const info = await userData();
  return <InfoForm data={info} />;
}
