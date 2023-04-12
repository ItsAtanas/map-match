import Head from "next/head";
import Image from "next/image";
import { Clock } from "../components/clock";
import { useState } from "react";

export default function Val() {
  const [maps, setMaps] = useState([]);
  const [mapGuess, setMapGuess] = useState("");

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
                <div className="w-1/4 bgcolor mr-5 ml-5">
                  <p className="text-white text-2xl pt-4">Map Guesses</p>
                  {maps.map((m, i) => (
                    <p key={i} className="text-white p-1">
                      {m}
                    </p>
                  ))}
                </div>
                <div className="w-1/2">
                  <img src="img/val-guess.jpg" />
                </div>
                <div className="w-1/4 bgcolor mr-5 ml-5">
                  <p className="text-white text-2xl pt-4">LOCATION GUESSES:</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-white text-xl pt-2 pb-2">What Map?</p>
                <input
                  onChange={(e) => setMapGuess(e.target.value)}
                  className="w-1/3"
                  value={mapGuess}
                />
                <p className="text-white text-xl pt-4 pb-2">
                  Where in the map?
                </p>
                <input className="w-1/3" />
                <button
                  className="bg-slate-600 mt-4"
                  type="button"
                  onClick={(e) => {
                    setMaps([...maps, mapGuess]);
                    setMapGuess("");
                  }}
                >
                  button
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
