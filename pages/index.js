import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Clock from "@/components/Clock";

export default function Home() {
  return (
    <>
      <Head>
        <title className="">Map Match</title>
        <meta name="description" content="Match these nuts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/img/M.png" />
      </Head>
      <main>
        <div className="">
          <div className="bg h-screen flex items-center justify-center">
            <div className="flex flex-col justify-center text-center">
              <p className="text-7xl text-white font-primary-montserrat font-medium">
                MAP MATCH
              </p>
              <p className="text-white pt-8 font-primary-roboto font-medium">
                Select your game:
              </p>
              <Link href="/val">
                <Image
                  className="pt-10"
                  alt="valorantLogo"
                  src="/img/val.png"
                  width={765}
                  height={183}
                />
              </Link>
              <Link href="/cs">
                <Image
                  className="pt-10"
                  alt="csLogo"
                  src="/img/csgo.png"
                  width={765}
                  height={183}
                />
              </Link>
              {/* want a countdown timer */}
              <Clock />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
