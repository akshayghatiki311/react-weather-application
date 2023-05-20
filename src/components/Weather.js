import "./Weather.css";
import { useState } from "react";

const Weather = (props) => {
  const [tempUnit, setTempUnit] = useState("C");
  const [temp, setTemp] = useState(props.data.temp_c);
  const toggleTemp = async () => {
    if (tempUnit === "C") {
      setTempUnit("F");
      setTemp(props.data.temp_f);
    } else if (tempUnit === "F") {
      setTempUnit("C");
      setTemp(props.data.temp_c);
    }
  };
  return (
    <div className="output-sec">
      <div className="location">
        {props.place.name}, {props.place.region}
      </div>
      <img src={props.data.condition.icon} alt="" />
      <div className="sky-status">{props.data.condition.text}</div>
      <div className="temp mx-5">
        Temperature : {temp}°{tempUnit}
      </div>
      <div className="d-flex">
        <label className="form-check-label mx-2">°C</label>
        <div className="form-check form-switch" onClick={toggleTemp}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="tempUnit"
          />
          <label className="form-check-label">°F</label>
        </div>
      </div>
      <div className="humidity">Humidity : {props.data.humidity}</div>
    </div>
  );
};

export default Weather;
