import { React } from "react";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import Table from "../../common/tabel/Table";
import DeleteButton from "../../../component/deleteButton";
import { getColumns } from "../../common/tabel/getColumns";
import { PencilIcon } from "@heroicons/react/20/solid";
export default async function SkilTable() {
  const prisma = new PrismaClient();
  const getSkils = async () => {
    const skil = await prisma.skil.findMany({
      select: {
        id: true,
        skilType: true,
        skil: true,
        onDelete: true,
      },
    });
    return skil;
  };

  const skil = await getSkils();
  const columns = getColumns(skil);
  const buttons = [
    {
      key: "delete",
      content: (item) => (
        <DeleteButton item={item.id} title="Skils" url="/dashboard/skils/api" />
      ),
    },
    {
      key: "edit",
      content: (item) => (
        <Link
          className="text-indigo-600 hover:text-indigo-900"
          href={`/dashboard/skils/${item.id}`}
        >
          <PencilIcon className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only"></span>
        </Link>
      ),
    },
  ];
  buttons.map((b) => {
    columns.push(b);
  });
  return (
    <div>
      <Table
        columns={columns}
        data={skil}
        title={"Skils"}
        href="skils/newSkils"
      />
    </div>
  );
}
