import React from "react";
import StatusBar from "./StatusBar";
import TextInput from "./TextInput";
import clipPathGroup from "./clip-path-group.png";
import image17 from "./image-17.png";
import image25 from "./image-25.png";
import image26 from "./image-26.png";
import image27 from "./image-27.png";
import image28 from "./image-28.png";
import "./style.css";

export const Interface = () => {
  return (
    <div className="interface">
      <div className="div">
        <StatusBar
          batteryClassName="status-bar-3"
          cellularClassName="status-bar-2-svg"
          className="status-bar-instance"
          mode="light"
          stackClassName="status-bar-2"
          time="image.svg"
          wifi="wifi-2.svg"
        />
        <img className="image" alt="Image" src={image17} />
        <div className="text-wrapper">PLAID</div>
        <img
          className="clip-path-group"
          alt="Clip path group"
          src={clipPathGroup}
        />
        <div className="text-wrapper-2">select your institutions</div>
        <TextInput
          className="text-input-instance"
          searchIcon="search-icon-2.svg"
          type="search"
        />
        <div className="frame">
          <img className="img" alt="Image" src={image25} />
        </div>
        <div className="overlap-group">
          <div className="image-wrapper">
            <img className="image-2" alt="Image" src={image26} />
          </div>
          <img className="image-3" alt="Image" src={image27} />
        </div>
        <div className="img-wrapper">
          <img className="image-4" alt="Image" src={image28} />
        </div>
      </div>
    </div>
  );
};
