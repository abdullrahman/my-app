import { React } from "react";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import Table from "../../common/tabel/Table";
import ButtonUi from "../../../component/buttonUi";
import { getColumns } from "../../common/tabel/getColumns";
import { PencilIcon } from "@heroicons/react/20/solid";

export default async function CertificateTable() {
  const prisma = new PrismaClient();
  const getCertificate = async () => {
    const certificate = await prisma.certificate.findMany({
      select: {
        id: true,
        certiFrom: true,
        certiMajor: true,
        certiGPA: true,
        certiGrade: true,
        certiType: true,
        certiUniv: true,
        onDelete: true,
      },
    });
    return certificate;
  };

  const certificate = await getCertificate();
  const columns = getColumns(certificate);
  const buttons = [
    {
      key: "delete",
      content: (item) => (
        <ButtonUi
          item={item.id}
          title="Certificate"
          url="/dashboard/certificate/api"
        />
      ),
    },
    {
      key: "edit",
      content: (item) => (
        <Link
          className="text-indigo-600 hover:text-indigo-900"
          href={`/dashboard/certificate/${item.id}`}
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

  // const handelOnSort = () => {
  //   // setSortedCulomns(sortedCulomns);
  //   const result = [...data];
  //   const sortedData = _.orderBy(
  //     result
  //     // [sortedCulomns.culomn],
  //     // [sortedCulomns.order]
  //   );
  //   setData(sortedData);
  // };

  return (
    <div>
      <Table
        columns={columns}
        data={certificate}
        title={"Certificate"}
        href="certificate/newCertificate"
      />
    </div>
  );
}
