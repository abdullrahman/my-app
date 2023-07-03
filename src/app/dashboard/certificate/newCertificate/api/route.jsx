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
  const updateInfo = await prisma.certificate.create({
    data: {
      InfoId: parseInt(body.data.InfoId),
      certiType: body.data.certiType,
      certiFrom: body.data.certiFrom,
      certiMajor: body.data.certiMajor,
      certiGPA: body.data.certiGPA,
      certiUniv: body.data.certiUniv,
      certiGrade: body.data.certiGrade,
      certiFromDate: body.data.certiFromDate,
      certiToDate: body.data.certiToDate,
      certiTotalHours: body.data.certiTotalHours,
    },
  });
  return new Response(JSON.stringify({ body }));
}
