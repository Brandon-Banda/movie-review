import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.scss";

const Rate = (props) => {

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
              onClick={() => props.setRating(value)}
            />
            <FaStar
              className='star'
              color={value <= props.rating ? "#ffc107" : "#e4e5e9"}
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
