import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function POST(req) {
  const body = await req.json();
  const updateSkil = await prisma.skil.create({
    data: {
      InfoId: parseInt(body.data.InfoId),
      skilType: body.data.skilType,
      skil: body.data.skil,
    },
  });
  return new Response(JSON.stringify({ body }));
}
