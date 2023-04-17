import Image from "next/image";

export default function RIP() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="m-auto">
          <div className="text-white font-primary-montserrat font-extrabold text-4xl">
            RIP BOZO U RAN OUTTA GUESSES LMFAO
          </div>
          <div className="flex justify-center pt-10">
            <Image
              width={300}
              height={300}
              src={"/img/utried.png"}
              alt="star"
            />
          </div>
        </div>
      </div>
    </>
  );
}
