import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";

const prisma = new PrismaClient();
export const authOptions = {
  pages: {
    signIn: "/signin",
    signOut: "/",
  },
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Hellow@Example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentals) {
        if (!credentals?.email || !credentals?.password) return null;
        const user = await prisma.info.findFirst({
          where: {
            email: credentals.email,
            onDelete: false,
          },
        });
        if (!user) return null;

        const isValidPassword = await compare(
          credentals.password,
          user.password
        );

        if (!isValidPassword) return null;
        return {
          id: user.id + "",
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      return token;
    },
    session: async ({ session, user, token }) => {
      session = { id: token.sub, ...session.user };
      return session;
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
