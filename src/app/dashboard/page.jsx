import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
export default async function About() {
  const session = await getServerSession(authOptions);
  // console.log(JSON.stringify(session));
  return (
    <>
      <pre>{JSON.stringify(session)}</pre>
    </>
  );
}
