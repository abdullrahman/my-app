import React from "react";
import { PrismaClient } from "@prisma/client";
import Form from "@/Components/Form";
export default async function About() {
  const prisma = new PrismaClient();
  const getUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
  };
  const users = await getUsers();
  return <div>Dashboard</div>;
}
