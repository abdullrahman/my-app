import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const id = params.id;
  const skilsData = await prisma.skil.findUnique({
    select: {
      id: true,
      skilType: true,
      skil: true,
      onDelete: true,
    },
    where: {
      id: parseInt(id),
    },
  });
  return new Response(JSON.stringify({ skilsData }));
}

export async function POST(req, { params }) {
  const body = await req.json();
  const id = params.id;
  const updateSkil = await prisma.skil.update({
    data: {
      skilType: body.data.skilType,
      skil: body.data.skil,
      onDelete: body.data.onDelete,
      InfoId: parseInt(body.data.InfoId),
    },
    where: {
      id: parseInt(id),
    },
  });
  return new Response(JSON.stringify({ updateSkil }));
}
