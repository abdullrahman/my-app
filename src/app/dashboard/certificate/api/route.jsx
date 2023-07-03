import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  const certificate = await prisma.certificate.findMany({
    select: {
      id: true,
      certiFrom: true,
      certiMajor: true,
      certiGPA: true,
      certiGrade: true,
      certiType: true,
      certiUniv: true,
      certiFromDate: true,
      certiToDate: true,
      certiTotalHours: true,
      InfoId: true,
      onDelete: true,
    },
  });
  return new Response(JSON.stringify({ certificate }));
}
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
