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
              <p className="text-7xl text-white font-primary-montserrat font-medium">
                MAP MATCH
              </p>
              <Image
                className="pt-10"
                alt="valorantLogo"
                src="/img/val.png"
                width={765}
                height={183}
              />
              <div className="text-3xl text-white pt-10 font-primary-montserrat font-medium">
                RESETS 12AM: {<Clock />}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
