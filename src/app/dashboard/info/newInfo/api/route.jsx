import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
const prisma = new PrismaClient();

export async function GET(req) {
  console.log(req);
  const getUserInfo = await prisma.info.findMany({
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
  return new Response(JSON.stringify({ getUserInfo }));
}
export async function POST(req) {
  const body = await req.json();
  const password = await hash(body.data.password, 12);
  const newInfo = await prisma.info.create({
    data: {
      name: body.data.name,
      email: body.data.email,
      password,
      careerObJ: body.data.careerObJ,
      summary: body.data.summary,
      city: body.data.city,
      role: body.data.role,
      skil: undefined,
      exper: undefined,
      project: undefined,
      socialMedia: undefined,
    },
  });
  console.log(body.data);
  return new Response(JSON.stringify({ body }));
}
