import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(currentIndex) {
    setRating(currentIndex);
  }
  function handleMouseEnter(currentIndex) {
    setHover(currentIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="StarRating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (rating || hover) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
}
