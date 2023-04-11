import Head from "next/head";
import { useState } from "react";
import BackgroundMagic from "../components/BackgroundMagic";

export default function Home() {
  return (
    <>
      <Head>
        <title>Link Tree threeeeeeeeeeeeeeeeee peepee hehe</title>
        <meta name="description" content="My Link Tree" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content="https://atanasb.me/img/1662670355918.jpeg"
        />
      </Head>
      <main>
        <BackgroundMagic />
        <div className="">
          <div className="flex justify-center pt-32">
            <img className="h-60 rounded-full" src="img/1662670355918.jpeg" />
          </div>
          <div className="flex justify-center mt-10">
            <a
              className="flex justify-center button one hover:scale-105 p-2.5 bg-transparent text-white border border-white w-1/2 rounded-xl h-11"
              href="https://github.com/ItsAtanas"
              target="_blank"
            >
              <button
                className="flex justify-center"
                href="https://github.com/ItsAtanas"
              >
                <img
                  className="h-6 mr-2 rounded-full"
                  src="img/github-white.png"
                />
                GitHub
              </button>
            </a>
          </div>
          <div className="flex justify-center mt-5">
            <a
              className="flex justify-center button one hover:scale-105 p-2.5 bg-transparent text-white border border-white w-1/2 rounded-xl h-11"
              href="https://atanasbogdanoski.com/"
              target="_blank"
            >
              <button className="flex justify-center">
                <img className="h-6 mr-2 rounded-full" src="img/website.png" />
                Portfolio
              </button>
            </a>
          </div>
          <div className="flex justify-center mt-5">
            <a
              className="flex justify-center button one hover:scale-105 p-2.5 bg-transparent text-white border border-white w-1/2 rounded-xl h-11"
              href="https://www.linkedin.com/in/bogdanoski-atanas/"
              target="_blank"
            >
              <button className="flex justify-center">
                <img className="h-6 mr-2 rounded-full" src="img/linkedin.png" />
                LinkedIn
              </button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
