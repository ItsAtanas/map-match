import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const futureDate = new Date(now + 3 * 24 * 60 * 60 * 1000); // 3 days from now
      const remainingTime = Math.max(futureDate.getTime() - now, 0);
      const days = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (remainingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      );
      const minutes = Math.floor(
        (remainingTime % (60 * 60 * 1000)) / (60 * 1000)
      );
      const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const { days, hours, minutes, seconds } = countdown;
  return (
    <>
      <Head>
        <title className="">Map Match</title>
        <meta name="description" content="Match these nuts fucker" />
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
              {/* want a countdown timer YOU FUCKING GOT IT BABY */}
              <span className="countdown font-mono text-2xl">
                <span style={{ "--value": days }}></span>:
                <span
                  style={{ "--value": hours.toString().padStart(2, "0") }}
                ></span>
                :
                <span
                  style={{ "--value": minutes.toString().padStart(2, "0") }}
                ></span>
                :
                <span
                  style={{ "--value": seconds.toString().padStart(2, "0") }}
                ></span>
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
