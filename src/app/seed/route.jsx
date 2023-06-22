import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// export default async function prismaExample() {
//   // const newUser = await prisma.user.create({
//   //   data: {
//   //     name: "Elliott",
//   //     email: "xelliottx@example-user.com",
//   //     image: "img",

//   //   },
//   // });

//   const users = await prisma.user.findMany();
//   console.log(users);
// }
export async function POST(req) {
  const body = await req.json();
  const newUser = await prisma.user.create({
    data: {
      name: body.data.name,
      email: body.data.email,
      image: body.data.img,
    },
  });
  console.log(body.name);
  return new Response(JSON.stringify({ body }));
}
