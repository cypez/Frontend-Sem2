import React from "react";
import StatusBar from "./StatusBar";
import clipPathGroup from "./clip-path-group.png";
import image17 from "./image-17.png";
import image29 from "./image-29.png";
import "./style.css";

export const Interface = () => {
  return (
    <div className="interface">
      <div className="div">
        <StatusBar
          batteryClassName="status-bar-3"
          cellular="cellular-2.svg"
          className="status-bar-instance"
          mode="light"
          stackClassName="status-bar-2"
          time="image.svg"
          timeClassName="design-component-instance-node"
          wifi="wifi-2.svg"
        />
        <img className="image" alt="Image" src={image17} />
        <div className="text-wrapper">PLAUD</div>
        <img
          className="clip-path-group"
          alt="clip path group"
          src={clipPathGroup}
        />
        <img className="img" alt="Image" src={image29} />
        <div className="headline">Almost done...</div>
      </div>
    </div>
  );
};
