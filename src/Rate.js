import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';
import './styles.css';

const Rate = () => {
    const [rating, setRating] = useState(null);

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const value = i + 1;

                return (
                    <label>
                        <input type="radio"
                            name="rating"
                            value={value}
                            onClick={() => setRating(value)}
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default Rate