import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { WiCloudyWindy } from "react-icons/wi";
import { WiDirectionUp } from "react-icons/wi";
import { WiCelsius } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { BsArrowsCollapse } from "react-icons/bs";

function Card({ name, item, unit }) {
  switch (name) {
    case "pressure":
      return (
        <div className="card">
          <BsArrowsCollapse /> <p>{name} </p>
          <p>
            {item} {unit}
          </p>
        </div>
      );
    case "temp_max":
      return (
        <div className="card">
          <WiDirectionUp /> <p>{name}</p>
          <p>
            {item} {unit}
          </p>
        </div>
      );
    case "temp_min":
      return (
        <div className="card">
          <AiOutlineArrowDown /> <p>{name}</p>
          <p>
            {item} {unit}
          </p>
        </div>
      );
    case "temp":
      return (
        <div className="card">
          <WiCelsius /> <p>{name}</p>
          <p>
            {item} {unit}
          </p>
        </div>
      );
    case "wind":
      return (
        <div className="card">
          <WiCloudyWindy /> <p>{name}</p>
          <p>
            {item} {unit}
          </p>
        </div>
      );
    case "humidity":
      return (
        <div className="card">
          <WiHumidity /> <p>{name}</p>
          <p>
            {item} {unit}
          </p>
        </div>
      );
    default:
      break;
  }
}

export default Card;
