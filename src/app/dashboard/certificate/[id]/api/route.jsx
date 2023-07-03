import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const id = params.id;
  const certificateData = await prisma.certificate.findUnique({
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
    where: {
      id: parseInt(id),
    },
  });
  return new Response(JSON.stringify({ certificateData }));
}

export async function POST(req, { params }) {
  const body = await req.json();
  const id = params.id;
  const newCertificate = await prisma.certificate.update({
    data: {
      certiFrom: body.data.certiFrom,
      certiMajor: body.data.certiMajor,
      certiGPA: body.data.certiGPA,
      certiGrade: body.data.certiGrade,
      certiType: body.data.certiType,
      certiUniv: body.data.certiUniv,
      onDelete: body.data.onDelete,
      certiFromDate: body.data.certiFromDate,
      certiToDate: body.data.certiToDate,
      certiTotalHours: body.data.certiTotalHours,
      InfoId: parseInt(body.data.InfoId),
    },
    where: {
      id: parseInt(id),
    },
  });
  return new Response(JSON.stringify({ newCertificate }));
}
