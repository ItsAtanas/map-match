import Head from "next/head";
import { useState } from "react";
import BackgroundMagic from "../components/BackgroundMagic";

export default function Home() {
  return (
    <>
      <Head>
        <title>Map Match</title>
        <meta name="description" content="Match these nuts fucker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content="https://atanasb.me/img/1662670355918.jpeg"
        />
      </Head>
      <main>
        <div className="background bg-gradient-to-tl from-[#1E1E1E] to-[#2E2E2E]">
          <p>this is just a test</p>
        </div>
      </main>
    </>
  );
}
