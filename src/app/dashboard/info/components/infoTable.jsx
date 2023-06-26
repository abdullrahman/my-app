import React from "react";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import Table from "../../common/tabel/Table";
import ButtonUi from "./buttonUi";
import { getColumns } from "../../common/tabel/getColumns";
import { PencilIcon } from "@heroicons/react/20/solid";

export default async function InfoTable(props) {
  console.log(props);

  const prisma = new PrismaClient();
  const getInfo = async () => {
    const info = await prisma.info.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        careerObJ: true,
        summary: true,
        city: true,
        role: true,
        onDelete: true,
      },
    });
    return info;
  };

  const info = await getInfo();

  // const info = data.info;
  // console.log(info);
  const columns = getColumns(info);
  const buttons = [
    {
      key: "delete",
      content: (item) => <ButtonUi item={item.id} />,
    },
    {
      key: "edit",
      content: (item) => (
        <Link
          className="text-indigo-600 hover:text-indigo-900"
          href={`/dashboard/info/${item.id}`}
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
  //console.log(info.sort((a, b) => (b.name > a.name ? 1 : -1)));

  const handelOnSort = () => {
    // setSortedCulomns(sortedCulomns);
    const result = [...data];
    const sortedData = _.orderBy(
      result
      // [sortedCulomns.culomn],
      // [sortedCulomns.order]
    );
    setData(sortedData);
  };

  return (
    <div>
      <Table
        columns={columns}
        data={info}
        title={"Information"}
        onSort={handelOnSort}
      />
    </div>
  );
}
