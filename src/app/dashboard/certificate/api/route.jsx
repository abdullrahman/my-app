import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// export async function GET(req) {
//   const info = await prisma.info.findMany({
//     select: {
//       id: true,
//       name: true,
//       email: true,
//       // password: true,
//       careerObJ: true,
//       summary: true,
//       city: true,
//       role: true,
//       onDelete: true,
//     },
//   });
//   return new Response(JSON.stringify({ info }));
// }
export async function POST(req) {
  const body = await req.json();
  const updateInfo = await prisma.certificate.update({
    data: {
      onDelete: true,
    },
    where: {
      id: body.item,
    },
  });
  return new Response(JSON.stringify({ updateInfo }));
}
