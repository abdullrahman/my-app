import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const body = await req.json();
  const newInfo = await prisma.info.create({
    data: {
      name: body.data.name,
      email: body.data.email,
      password: body.data.password,
      careerObJ: body.data.careerObjective,
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
