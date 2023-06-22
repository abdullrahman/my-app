import React from "react";
import { PrismaClient } from "@prisma/client";

export default async function About() {
  const prisma = new PrismaClient();
  const getUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
  };
  const users = await getUsers();
  const columns = Object.keys(users[0]);
  return (
    <>
      <div>
        {columns.map((c) => (
          <p>{c}</p>
        ))}
      </div>
    </>
  );
}
