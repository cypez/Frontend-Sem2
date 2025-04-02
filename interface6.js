import React from "react";
import StatusBar from "./StatusBar";
import TextInput from "./TextInput";
import clipPathGroup from "./clip-path-group.png";
import image29 from "./image-29.png";
import image30 from "./image-30.png";
import "./style.css";

export const Interface = () => {
  return (
    <div className="interface">
      <div className="div">
        <StatusBar
          batteryClassName="status-bar-3"
          cellularClassName="cellular-2-svg"
          className="status-bar-instance"
          mode="light"
          stackClassName="status-bar-2"
          time="image.svg"
          wifi="wifi-2.svg"
        />
        <img className="image" alt="Image" src={image29} />
        <div className="text-wrapper-2">PLAID</div>
        <div className="clip-path-group">
          <img className="img" alt="Image" src={clipPathGroup} />
        </div>
        <div className="text-wrapper-3">Enter your credentials</div>
        <div className="text-wrapper-4">
          <span className="span">enter your</span>
          <span className="text-wrapper-4">DBS Bank</span>
          <span className="span"> credentials to</span>
        </div>
        <div className="text-wrapper-5">sync with PLAID</div>
        <div className="form">
          <TextInput
            className="text-input-instance"
            type="password"
            placeholder="Password placeholder"
            visibleIconClassName="text-input-2"
          />
        </div>
        <div className="legal">
          <p className="p">
            By providing your DBS BANK credentials to Plaid, you're allowing
            Plaid to retrieve your financial data.
          </p>
        </div>
        <div className="frame">
          <div className="sub-submit">
            <span className="text-wrapper-6">Submit</span>
          </div>
        </div>
      </div>
    </div>
  );
};
