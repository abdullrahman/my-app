import React from "react";
import { PrismaClient } from "@prisma/client";
import ProjectForm from "../components/projectForm";
export default async function NewProject() {
  const prisma = new PrismaClient();
  const getSkils = async () => {
    const res = await prisma.skil.findMany({
      select: {
        id: true,
        skil: true,
      },
    });
    return res;
  };
  const skilsData = await getSkils();
  // console.log(skilsData);
  return (
    <div>
      <ProjectForm skilData={skilsData} projectData={null} />
    </div>
  );
}
