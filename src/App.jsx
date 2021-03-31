import './styles.css';
import React, { useState } from "react";
import Rate from "./Rate";

function App() {
    const Images = [
        { idx: '1', title: 'Inception', img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ1wNJi3WBo8wjZ-lxg4xPbg6-X7tQ1w6ZFI5L-RH1rUiOOGxLO" },
        { idx: '2', title: 'Interstellar', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDg2ZptluiVtd9r5NaQndBw4Jb1QsVMSRPRXWGUXiO5pUKzRGC" },
        { idx: '3', title: 'Star Wars Episode III: Revenge of the Sith', img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRjzq4ry-5lqWUO95DoVASJYiB5ZXGMOazC5qLJuEuZ3qxhQsJ5" },
        { idx: '4', title: 'Lone Survivor', img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRPIHE-g2usJD26Hh5nJsdwN0aBiDQpumKkvGxGuZLrx17uBn2W" },
        { idx: '5', title: 'Dexter', img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQKIxgh3Bxwrklou_UBFzMz-GCBZ5oL91TQMr2JHFCjWGbhsegj" }
    ];
    return (
        <div className="App">
            {Images.map(({ img, title, idx }) => (
                <div className="container">
                    <div className="imgContainer">
                        <img
                            key={idx}
                            src={img}
                            alt="uh"
                        />
                    </div>
                    <h3> {idx}. {title} </h3>
                    <Rate />
                </div>
            ))}
        </div>
    );
}

export default App;
