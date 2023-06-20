"use client";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [img, setImg] = useState(null);
  const handelSubmit = (e) => {
    e.preventDefault();
    const data = { name: name, email: email, img: img };
    // console.log(name, email, img);
    postdata(data);
  };
  const postdata = async (data) => {
    await fetch("/seed", {
      method: "POST",
      body: JSON.stringify({ data }),
    });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className=" w-full h-full bg-white flex-col flex">
          <form onSubmit={handelSubmit}>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="name"
            />
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="email"
            />
            <input
              type="text"
              onChange={(e) => {
                setImg(e.target.value);
              }}
              id="img"
            />
            <button type="submit" value="submit" className="text-black">
              submit
            </button>
          </form>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
