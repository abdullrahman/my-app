// "use client";
// import { useSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
export default async function User() {
  // const { data: session } = useSession();
  const prisma = new PrismaClient();

  const getData = async () => {
    const data = await prisma.info.findUnique({
      where: {
        id: 1,
      },
      include: {
        certificate: true,
      },
    });
    return data;
  };
  const data = await getData();
  console.log(data);
  return <pre>{JSON.stringify(data)}</pre>;
}
