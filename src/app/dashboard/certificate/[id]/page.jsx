"use client";
import React from "react";
import CertifiForm from "../components/certifiForm";
import { useParams } from "next/navigation";
export default async function page() {
  const path = useParams();
  const getData = async () => {
    const res = await fetch(
      `http://localhost:3000/dashboard/certificate/${path.id}/api`
    );
    return res.json();
  };
  const certificateData = await getData();
  return (
    <div>
      <CertifiForm data={certificateData} />
    </div>
  );
}
