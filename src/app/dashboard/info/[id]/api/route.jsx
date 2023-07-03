import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const id = params.id;
  const getUserInfo = await prisma.info.findUnique({
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
    where: {
      id: parseInt(id),
    },
  });
  return new Response(JSON.stringify({ getUserInfo }));
}

export async function POST(req, { params }) {
  const body = await req.json();
  const id = params.id;
  const password = await hash(body.data.password, 12);
  const newInfo = await prisma.info.update({
    data: {
      name: body.data.name,
      email: body.data.email,
      password,
      careerObJ: body.data.careerObJ,
      summary: body.data.summary,
      city: body.data.city,
      role: body.data.role,
      onDelete: body.data.onDelete,
      skil: undefined,
      exper: undefined,
      project: undefined,
      socialMedia: undefined,
    },
    where: {
      id: parseInt(id),
    },
  });
  return new Response(JSON.stringify({ newInfo }));
}
