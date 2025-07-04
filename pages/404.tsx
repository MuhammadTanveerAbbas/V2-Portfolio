import React, { useEffect, useState } from "react";
import Link from "next/link";
import { randomNumberText } from "@/utils/utils";

function Page404() {
  const [num404, setNum404] = useState("0000");

  useEffect(() => {
    randomNumberText("404", setNum404);
  }, []);

  return (
    <main
      role="main"
      className="min-h-screen w-full flex items-center justify-center flex-col animate-fadeIn px-4"
    >
      <h1 className="text-7xl text-white font-monospace font-bold">{`{ error: ${num404} }`}</h1>

      <p className="text-fun-gray text-xl mt-8 text-center">
        Sorry, looks like that page is missing.
      </p>

      <Link href="/" passHref>
        <a className="mt-6 border border-fun-pink-light text-base px-6 py-2 rounded-xl text-fun-pink-light bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
          Return Home
        </a>
      </Link>
    </main>
  );
}

export default Page404;
