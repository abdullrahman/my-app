import { React } from "react";
import Link from "next/link";
// import { useRouter, usePathname } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import Table from "../../common/tabel/Table";
import ButtonUi from "../../../component/buttonUi";
// import { XCircleIcon } from "@heroicons/react/20/solid";
import { getColumns } from "../../common/tabel/getColumns";
import { PencilIcon } from "@heroicons/react/20/solid";

export default async function InfoTable(props) {
  // const route = useRouter();
  // const path = usePathname();

  // const fetcher = (url) => fetch(url).then((res) => res.json());

  // const { data, error, isLoading } = useSWR(
  //   "http://localhost:3000/dashboard/info/api",
  //   fetcher,
  //   {
  //     revalidateOnMount: true,
  //   }
  // );
  // if (error) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;

  // const info = data.info;
  // const handleErrors = async (resp) => {
  //   //   setConfirmShow(false);
  //   //   setMessageShow(true);
  //   //   setMessage(resp.statusText);
  //   throw new Error(resp.statusText);
  // };
  // const handelDelete = async (item) => {
  //   console.log(item);
  //   const res = await fetch("/dashboard/info/api", {
  //     method: "POST",
  //     body: JSON.stringify({ item }),
  //   });
  //   // setStatus(res.ok ? true : false);
  //   const errorCode = res.ok ? false : res.status;
  //   if (errorCode) handleErrors(res);
  //   route.refresh();
  // };
  const prisma = new PrismaClient();
  const getInfo = async () => {
    const info = await prisma.info.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        // password: true,
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

  // console.log(info);
  const columns = getColumns(info);
  const buttons = [
    {
      key: "delete",
      content: (item) => (
        <ButtonUi item={item.id} title="Info" url="/dashboard/info/api" />
      ),
    },
    //<ButtonUi item={item.id}
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
        href="info/newInfo"
      />
    </div>
  );
}
