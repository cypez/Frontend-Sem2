import React from "react";
import StatusBar from "./StatusBar";
import clipPathGroup from "./clip-path-group.png";
import ellipse4 from "./ellipse-4.png";
import frame1038 from "./frame-1038.svg";
import image17 from "./image-17.png";
import image24 from "./image-24.png";
import "./style.css";

export const Interface = () => {
  return (
    <div className="interface">
      <div className="div">
        <StatusBar
          batteryClassName="status-bar-3"
          cellulaire="cellulaire-2.svg"
          className="status-bar-2"
          mode="light"
          stackClassName="status-bar-2-instance"
          timeClassName="design-component-instance-node"
          wifi="wifi-2.svg"
        />
      </div>

      <div className="image">
        <img className="image" alt="Image" src={image17} />
      </div>

      <div className="text-wrapper-14">
        PLAID
      </div>
      <img
        className="clip-path-group"
        alt="clip path group"
        src={clipPathGroup}
      />

      <p className="p">
        PLAID wants to sync with WalletSync to connect your account.
      </p>

      <div className="overlap-group">
        <img className="img" alt="Image" src={image24} />
        <div className="text-wrapper-2">Connect effortlessly</div>
      </div>

      <div className="text-wrapper-3">
        Plaid allows you to connect your financial accounts in a secure manner
      </div>

      <div className="text-wrapper-4">Your data is secured</div>

      <p className="plaid-will-never">
        Plaid will never disclose your information, and will only operate it with your permission
      </p>

      <img className="ellipse" alt="Ellipse" src={ellipse4} />
      
      <p className="text-wrapper-5">
        By continuing, you agree to our terms and conditions
      </p>

      <div className="frame">
        <div className="text-wrapper-6">Continue</div>
        <img className="frame-2" alt="Frame" src={frame1038} />
      </div>
    </div>
  );
};
