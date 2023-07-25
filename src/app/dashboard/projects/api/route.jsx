import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const skils = await prisma.skil.findMany({
    select: {
      id: true,
      skil: true,
    },
  });
  return new Response(JSON.stringify(skils));
}
