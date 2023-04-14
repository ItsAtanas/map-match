import Head from "next/head";
import Image from "next/image";
import { Clock } from "../components/clock";
import { useState } from "react";

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
          <div className="bg h-screen flex items-center justify-center bg-gradient-to-br  from-primary-mmblack to-black">
            <div className="flex flex-col justify-center text-center">
              <p className="text-5xl text-white font-primary-montserrat font-medium">
                MAP MATCH
              </p>
              {/*Stars Section*/}
              <div className="flex flex-row justify-center pt-5 pb-5">
                <img className="w-16 h-16 mr-2" src="img/empty-star.png" />
                <img className="w-16 h-16 mr-2" src="img/empty-star.png" />
                <img className="w-16 h-16 mr-2" src="img/empty-star.png" />
                <img className="w-16 h-16 mr-2" src="img/empty-star.png" />
                <img className="w-16 h-16 mr-2" src="img/empty-star.png" />
              </div>
              {/*Main*/}
              <div className="flex flex-row justify-center">
                {/*Left Map Guess Section*/}
                <div className="w-1/4 bgcolor mr-20 ml-20 rounded-3xl ">
                  <p className="text-white text-2xl pt-4">Map Guesses:</p>
                  {maps.map((m, i) => (
                    <p key={i} className="text-white p-1 text-lg">
                      {m}
                    </p>
                  ))}
                </div>
                {/*Middle Image*/}
                <div className="w-1/2">
                  <img src="img/val-guess.jpg" />
                </div>
                {/*Right Map Guess Section*/}
                <div className="w-1/4 bgcolor mr-20 ml-20 rounded-3xl">
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
                  className="w-1/3 p-1 rounded"
                  value={mapGuess}
                />
                <p className="text-white text-xl pt-4 pb-2">
                  Where in the map?
                </p>
                <input
                  className="w-1/3 p-1 rounded"
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
