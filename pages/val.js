import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Val() {
  const [maps, setMaps] = useState([]);
  const [mapGuess, setMapGuess] = useState("");

  const [location, setLocation] = useState([]);
  const [locationGuess, setLocationGuess] = useState("");

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
          <div className="">
            <div className="flex flex-col justify-center text-center mt-3 mb-3">
              {/*Title And Backarrow*/}
              <div className="grid grid-cols-3 ">
                <div className="ml-5 ">
                  <Link href="/">
                    <Image
                      alt="backspace"
                      width={70}
                      height={70}
                      className="backarrowsize"
                      src="/img/backarrowno.png"
                    />
                  </Link>
                </div>
                <div className="mb-3">
                  <p className="text-5xl text-white font-primary-montserrat font-medium font-change">
                    MAP MATCH
                  </p>
                </div>
              </div>
              {/*Stars Section*/}
              <div className="flex flex-row justify-center pb-5">
                <Image
                  alt="star"
                  width={60}
                  height={60}
                  className="mr-2 star"
                  src="/img/Fmpty-Star.png"
                />
                <Image
                  alt="star"
                  width={60}
                  height={60}
                  className="mr-2 star"
                  src="/img/Fmpty-Star.png"
                />
                <Image
                  alt="star"
                  width={60}
                  height={60}
                  className="mr-2 star"
                  src="/img/Fmpty-Star.png"
                />
                <Image
                  alt="star"
                  width={60}
                  height={60}
                  className="mr-2 star"
                  src="/img/Fmpty-Star.png"
                />
                <Image
                  alt="star"
                  width={60}
                  height={60}
                  className="mr-2 star"
                  src="/img/Fmpty-Star.png"
                />
              </div>
              {/*Main*/}
              <div className="respond flex flex-row justify-center">
                {/*Left Map Guess Section*/}
                <div className="left w-1/4 bgcolor mr-20 ml-20 rounded-3xl ">
                  <p className="text-white text-2xl pt-4">Map Guesses:</p>
                  {maps.map((m, i) => (
                    <p key={i} className="text-white p-1 text-lg">
                      {m}
                    </p>
                  ))}
                </div>
                {/*Middle Image*/}
                <div className="middle w-1/2">
                  <Image
                    alt="map"
                    width={800}
                    height={800}
                    sizes="(max-width: 100px)"
                    src="/img/val-guess.jpg"
                  />
                </div>
                {/*Right Map Guess Section*/}
                <div className="right w-1/4 bgcolor mr-20 ml-20 rounded-3xl">
                  <p className="text-white text-2xl pt-4">Location Guesses:</p>
                  {location.map((l, i) => (
                    <p className="text-white p-1 text-lg" key={i}>
                      {l}
                    </p>
                  ))}
                </div>
              </div>
              {/*Bottom Inputs/Button*/}
              <div className="flex flex-col items-center mt-4">
                <p className="text-white text-xl pt-2 pb-2">What Map?</p>
                <input
                  onChange={(e) => setMapGuess(e.target.value)}
                  className="w-1/3 p-1 rounded input-size"
                  value={mapGuess}
                />
                <p className="text-white text-xl pt-4 pb-2">
                  Where in the map?
                </p>
                <input
                  className="w-1/3 p-1 rounded input-size"
                  value={locationGuess}
                  onChange={(e) => {
                    setLocationGuess(e.target.value);
                  }}
                />
                <button
                  className="bg-transparent text-white font-semibold py-2 px-4 mt-5 border border-white rounded"
                  type="button"
                  onClick={(e) => {
                    setMaps([...maps, mapGuess]);
                    setMapGuess("");
                    setLocation([...location, locationGuess]);
                    setLocationGuess("");
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
