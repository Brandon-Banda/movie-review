import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./styles.scss";

const Rate = (props) => {
  const [rating, setRating] = useState(null);
  const [counts, setCounts] = useState([
    {index: 1, r: 3},
    {index: 2, r: 1},
    {index: 3, r: 5},
    {index: 4, r: 2},
    {index: 5, r: 4},
  ]);
  let { rateValue } = useParams(); // should be 5 ratings for both, need to find a way to use the key of the rates

  useEffect(() => {
    let data = [];
    for(let i = 1; i < props.count; i++)
    {
      data+= localStorage.getItem(`rating-state${i}`);
    }

    if (rateValue) {
      setRating(rateValue);
      //console.log(rateValue);
    } else if (data && !rateValue) {
      // if there is rating data and no URL param
      //setRating(JSON.parse(data)); this is wrong, we need to set each item in data to its respective localStorage section.
      for(let i = 0; i < (props.count-1 ); i++)
      {
        setCounts({index: {i}, r: data});
      }
      console.log(counts);
      //console.log("data  " + JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    for(let i = 0; i < props.count; i++)
    {
      localStorage.setItem(`rating-state${i}`, JSON.stringify(rating));
    }
    console.log('num of stars ' + (props.count -1))
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
