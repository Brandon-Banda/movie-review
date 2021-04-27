import { React, useState } from "react";
import calcETA from "./constants";

function Navy() {
  const [view, setView] = useState("form");
  const [values, setValues] = useState({
    lat1: "",
    lat2: "",
    lon1: "",
    lon2: "",
    speed: "",
  });

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  function toRadians(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
  }

  var time = calcETA(
    values.speed,
    toRadians(values.lat2),
    toRadians(values.lat1),
    toRadians(values.lon2),
    toRadians(values.lon1)
  );

  // test case
  // 35.689487 139.691711 to -33.854816,151.216454
  // 4862 mi

  var dist = time * (values.speed / 1);


  return (
    <div
      style={{
        backgroundImage: `url(https://i.imgur.com/HDdi7Pp.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      {view === "form" ? (
        <div className='input-container'>
          <input
            value={values.lat1}
            type='number'
            required
            min='-90'
            max='90'
            onChange={set("lat1")}
            placeholder='Enter Latitude'
            className='dark-input'
          ></input>
          <input
            value={values.lon1}
            type='number'
            required
            min='1'
            onChange={set("lon1")}
            placeholder='Enter Longitude'
            className='dark-input'
          ></input>
          <input
            value={values.lat2}
            type='number'
            required
            min='1'
            onChange={set("lat2")}
            placeholder='Enter Latitude'
            className='dark-input'
          ></input>
          <input
            value={values.lon2}
            type='number'
            required
            min='1'
            onChange={set("lon2")}
            placeholder='Enter Longitude'
            className='dark-input'
          ></input>
          <input
            value={values.speed}
            type='number'
            required
            min='1'
            onChange={set("speed")}
            placeholder='Enter Speed'
            className='dark-input'
          ></input>
          <button
            className='dark-button'
            onClick={() => {
              setView("result");
            }}
          >
            Submit
          </button>
        </div>
      ) : (
        <div
          style={{
            margin: "auto",
            width: "80%",
            padding: "10px",
            display: "flex",
          }}
        >
                   <p
            style={{
              display: "flex",
              margin: "auto",
              alignItems: "center",
              width: "calc(50%-2rem)",
              fontSize: "30px",
              height: "90px",
              lineHeight: "90px",
              textAlign: "center",
              //color: "black",
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              overflow: 'hidden',
              height: '100%',
              //opacity: 0.6,
              textDecoration: 'none',
            }}
          >
            {`Starting coordinates: ${parseFloat(values.lat1).toFixed( 3 )}, ${parseFloat(values.lon1).toFixed( 3 )}`} 
            <br />
            {`Ending coordinates: ${parseFloat(values.lat2).toFixed( 3 )}, ${parseFloat(values.lon2).toFixed( 3 )}`}
            <br /> 
            {`Speed traveling: ${values.speed} KNOTS`} 
            <br />
            {`Estimated time: ${parseInt(time)} HOURS`}
            {/*TODO:display in months/days/hours instead of just hours*/}
            <br />
            {`Miles traveled: ${parseInt(dist)} NAUTICAL MILES`}
 
          </p>
          <div style={{ alignItems: "right", justifyContent: "space-between" }}>
            <button
              className='dark-button'
              onClick={() => {
                setView("form");
                // TODO: actually clear the form
              }}
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navy;
