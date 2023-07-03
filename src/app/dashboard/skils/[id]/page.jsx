"use client";
import React from "react";
import SkilForm from "../components/skilForm";
import { useParams } from "next/navigation";
export default async function page() {
  const path = useParams();
  const getData = async () => {
    const res = await fetch(
      `http://localhost:3000/dashboard/skils/${path.id}/api`
    );
    return res.json();
  };
  const skilsData = await getData();
  return (
    <div>
      <SkilForm data={skilsData} />
    </div>
  );
}
