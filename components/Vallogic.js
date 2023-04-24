import { useState } from "react";
import Image from "next/image";
const Vallogic = (props) => {
  const [starone, setStarOne] = useState("/img/Fmpty-Star.png");

  if (props.maps.length === 1) {
    setStarOne("/img/Fmpty-Star.png");
  } else if (props.maps.length === 2) {
    // other logic
  }

  return (
    <div className="flex flex-row justify-center pb-5">
      <Image
        alt="star"
        width={60}
        height={60}
        className="mr-2 star"
        src={starone}
      />
      <Image
        alt="star"
        width={60}
        height={60}
        className="mr-2 star"
        src={"/img/Fmpty-Star.png"}
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
  );
};

export default Vallogic;
