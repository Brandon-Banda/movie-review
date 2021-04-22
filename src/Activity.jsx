import React from "react";

function Activity() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Activity Diagram </h1>
      <img src={process.env.PUBLIC_URL + "activity.svg"} alt='' />
    </div>
  );
}

export default Activity;
