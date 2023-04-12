import Head from "next/head";
import Image from "next/image";
import { Clock } from "../components/clock";

export default function Val() {
  return (
    <>
      <Head>
        <title>Map Match | Val</title>
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
          <div className="h-screen flex items-center justify-center bg-gradient-to-br from-primary-mmblack to-black">
            <div className="flex flex-col justify-center text-center">
              <p className="text-5xl text-white font-primary-montserrat font-medium">
                MAP MATCH
              </p>
              <div className="flex flex-row justify-center pt-5 pb-5">
                <img className="w-16 h-16" src="img/full-star.png" />
                <img className="w-16 h-16" src="img/full-star.png" />
                <img className="w-16 h-16" src="img/full-star.png" />
                <img className="w-16 h-16" src="img/full-star.png" />
                <img className="w-16 h-16" src="img/full-star.png" />
              </div>
              <div className="flex flex-row justify-center">
                <div className="w-1/4 bgcolor mr-5 ml-5"></div>
                <div className="w-1/2">
                  <img src="img/val-guess.jpg" />
                </div>
                <div className="w-1/4 bgcolor mr-5 ml-5"></div>
              </div>
              <div className="">
                <p className="text-white text-xl pt-2">What Map?</p>
                <input className="w-1/3" />
                <p className="text-white text-xl pt-2">Where in the map?</p>
                <input className="w-1/3" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
