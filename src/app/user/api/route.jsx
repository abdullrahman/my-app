import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
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
    where: {
      id: 1,
    },
    include: {
      certificate: true,
    },
  });
  return new Response(JSON.stringify({ info }));
}
