import React from "react";
import { Illustration } from "./Illustration";
import { StatusBar } from "./StatusBar";
import image17 from "./image-17.png";
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
        <div className="text-wrapper">PLAID</div>
        <div className="text-wrapper-2">Success</div>
        <p className="p">
          Your account has been successfully linked
        </p>
        <Illustration
          className="illustration-instance"
          successIllustration="image.png"
          topic="success"
        />
      </div>
    </div>
  );
};
