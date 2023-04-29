import { useState, useEffect } from "react";
import Image from "next/image";

const Vallogic = (props) => {
  const fullStar = "/img/full-star.png";
  const emptyStar = "/img/Fmpty-Star.png";
  const halfStar = "/img/Half-Star.png";
  const [starone, setStarOne] = useState(emptyStar);
  const [startwo, setStarTwo] = useState(emptyStar);
  const [starthree, setStarThree] = useState(emptyStar);
  const [starfour, setStarFour] = useState(emptyStar);
  const [starfive, setStarFive] = useState(emptyStar);

  useEffect(() => {
    if (props.maps.length + props.location.length === 2) {
      setStarOne(fullStar);
      setStarTwo(fullStar);
      setStarThree(fullStar);
      setStarFour(fullStar);
      setStarFive(fullStar);
    } else if (props.maps.length + props.location.length === 3) {
      setStarOne(fullStar);
      setStarTwo(fullStar);
      setStarThree(fullStar);
      setStarFour(fullStar);
      setStarFive(halfStar);
    } else if (props.maps.length + props.location.length === 4) {
      setStarOne(fullStar);
      setStarTwo(fullStar);
      setStarThree(fullStar);
      setStarFour(fullStar);
      setStarFive(emptyStar);
    } else if (props.maps.length + props.location.length === 5) {
      setStarOne(fullStar);
      setStarTwo(fullStar);
      setStarThree(fullStar);
      setStarFour(halfStar);
      setStarFive(emptyStar);
    } else if (props.maps.length + props.location.length === 6) {
      setStarOne(fullStar);
      setStarTwo(fullStar);
      setStarThree(fullStar);
      setStarFour(emptyStar);
      setStarFive(emptyStar);
    } else if (props.maps.length + props.location.length === 7) {
      setStarOne(fullStar);
      setStarTwo(fullStar);
      setStarThree(halfStar);
      setStarFour(emptyStar);
      setStarFive(emptyStar);
    } else if (props.maps.length + props.location.length === 8) {
      setStarOne(fullStar);
      setStarTwo(fullStar);
      setStarThree(emptyStar);
      setStarFour(emptyStar);
      setStarFive(emptyStar);
    } else if (props.maps.length + props.location.length === 9) {
      setStarOne(fullStar);
      setStarTwo(halfStar);
      setStarThree(emptyStar);
      setStarFour(emptyStar);
      setStarFive(emptyStar);
    } else if (props.maps.length + props.location.length === 10) {
      setStarOne(fullStar);
      setStarTwo(emptyStar);
      setStarThree(emptyStar);
      setStarFour(emptyStar);
      setStarFive(emptyStar);
    } else if (props.maps.length + props.location.length === 11) {
      setStarOne(halfStar);
      setStarTwo(emptyStar);
      setStarThree(emptyStar);
      setStarFour(emptyStar);
      setStarFive(emptyStar);
    } else if (props.maps.length + props.location.length === 12) {
      setStarOne(emptyStar);
      setStarTwo(emptyStar);
      setStarThree(emptyStar);
      setStarFour(emptyStar);
      setStarFive(emptyStar);
    }
  }, [props.render]);

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
        src={startwo}
      />
      <Image
        alt="star"
        width={60}
        height={60}
        className="mr-2 star"
        src={starthree}
      />
      <Image
        alt="star"
        width={60}
        height={60}
        className="mr-2 star"
        src={starfour}
      />
      <Image
        alt="star"
        width={60}
        height={60}
        className="mr-2 star"
        src={starfive}
      />
    </div>
  );
};

export default Vallogic;
