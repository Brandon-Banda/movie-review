import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./styles.scss";

const Rate = () => {
  const [rating, setRating] = useState(null);
  let { rateValue } = useParams();

  useEffect(() => {
    const data = localStorage.getItem("rating-state");
    if (rateValue) {
      setRating(rateValue);
    }
    if (data && !rateValue) {
      // if there is rating data and no URL param
      setRating(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("rating-state", JSON.stringify(rating));
  });

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const value = i + 1;
        return (
          <label>
            <input
              type='radio'
              name='rating'
              value={value}
              onClick={() => setRating(value)}
            />
            <FaStar
              className='star'
              color={value <= rating ? "#ffc107" : "#e4e5e9"}
              size={40}
              key={value}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rate;
