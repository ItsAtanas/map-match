import Head from "next/head";
import { useState } from "react";
import { Clock } from "../components/clock";

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
        <div className="">
          <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col justify-center text-center">
              <p className="text-7xl text-white">Map Match</p>
              <p className="text-white pt-8">Select your game:</p>
              <img
                className="pt-10"
                src="img/val.png"
                width={765}
                height={183}
              />
              <img
                className="pt-10"
                src="img/csgo.png"
                width={765}
                height={183}
              />
              <div className="text-3xl text-white pt-10">
                RESETS 12AM: {<Clock />}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
