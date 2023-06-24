import React from "react";
import { PrismaClient } from "@prisma/client";

export default async function About() {
  const prisma = new PrismaClient();
  const getUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
  };
  const users = await getUsers();
  let columns = [];
  if (users[0]) {
    console.log(users[0]);
    columns = Object.keys(users[0]);
  } else columns = ["No Rows"];
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
