import { React } from "react";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import Table from "../../common/tabel/Table";
import DeleteButton from "../../../component/deleteButton";
import { getColumns } from "../../common/tabel/getColumns";
import { PencilIcon } from "@heroicons/react/20/solid";
export default async function ProjectTable() {
  const prisma = new PrismaClient();
  const getProjects = async () => {
    const project = await prisma.project.findMany({
      select: {
        projectImg: true,
        id: true,
        projectName: true,
        projectBeneficiary: true,
        projectType: true,
      },
    });
    return project;
  };

  const project = await getProjects();
  const columns = getColumns(project);
  const buttons = [
    {
      key: "delete",
      content: (item) => (
        <DeleteButton
          item={item.id}
          title="projects"
          url="/dashboard/projects/api"
        />
      ),
    },
    {
      key: "edit",
      content: (item) => (
        <Link
          className="text-indigo-600 hover:text-indigo-900"
          href={`/dashboard/projects/${item.id}`}
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
        data={project}
        title={"Projects"}
        href="projects/newProject"
      />
    </div>
  );
}
