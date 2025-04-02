import React from "react";
import { StatusBar } from "./StatusBar";
import { TouchId } from "./TouchId";
import frame3 from "./frame-3.png";
import image from "./image.svg";
import "./style.css";
import vector from "./vector.svg";

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
          time="time-2.svg"
          timeClassName="design-component-instance-node"
          wifi="wifi-2.svg"
        />
        <div className="logo">
          <div className="overlap-group">
            <img className="vector" alt="Vector" src={vector} />

            <img className="img" alt="Vector" src={image} />
          </div>

          <p className="wallet-sync">
            <span className="text-wrapper">Wallet</span>

            <span className="span">Sync</span>
          </p>
        </div>

        <div className="text-wrapper-2">LOGIN TO YOUR dApp</div>

        <div className="text-wrapper-3">ACCOUNT</div>

        <div className="frame">
          <div className="text-wrapper-4">Login with fingerprint/face ID</div>

          <TouchId className="touch-ID" />
        </div>

        <div className="frame-2">
          <div className="text-wrapper-5">Connect wallet</div>

          <div className="mingcute-wallet" />
        </div>

        <img className="frame-3" alt="Frame" src={frame3} />

        <div className="home-indicator">
          <div className="home-indicator-2" />
        </div>
      </div>
    </div>
  );
};
