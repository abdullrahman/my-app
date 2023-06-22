import React from "react";
import { PrismaClient } from "@prisma/client";
import Table from "../../common/tabel/Table";
import { getColumns } from "../../common/tabel/getColumns";
export default async function InfoTable() {
  const prisma = new PrismaClient();
  const getUsers = async () => {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        createdAt: false,
      },
    });
    return users;
  };

  const users = await getUsers();
  const columns = getColumns(users);
  return (
    <div>
      <Table culomns={columns} data={users} title={"Information"} />
    </div>
  );
}
