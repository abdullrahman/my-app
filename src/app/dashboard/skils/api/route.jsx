import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  const skils = await prisma.skil.findMany({
    select: {
      id: true,
      skilType: true,
      skil: true,
      onDelete: true,
    },
  });
  return new Response(JSON.stringify({ skils }));
}
export async function POST(req) {
  const body = await req.json();
  const updateSkil = await prisma.skil.update({
    data: {
      onDelete: true,
    },
    where: {
      id: body.item,
    },
  });
  return new Response(JSON.stringify({ updateSkil }));
}
