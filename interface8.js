import React from "react";
import { Checkbox } from "./checkbox";
import { StatusBar } from "./StatusBar";
import check from "./check.svg";
import clipPathGroup from "./clip-path-group.png";
import image17 from "./image-17.png";
import image31 from "./image-31.png";
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
        <img className="img" alt="Image" src={image31} />
        <div className="headline">select accounts</div>

        <div className="frame">
          <div className="overlap-group">
            <div className="text-wrapper-2">DBS Savings Plus Account</div>
            <div className="text-wrapper-3">********283</div>
          </div>
          <div className="overlap">
            <img className="check" alt="check" src={check} />
          </div>
          <div className="balance">$58,321</div>
        </div>

        <div className="frame-2">
          <div className="text-wrapper-4">POSB Passbook Savings Account</div>
          <div className="text-wrapper-5">********173</div>
          <Checkbox
            className="checkbox-instance"
            state="unchecked"
            label="balance-2"
            amount="$137,654"
          />
        </div>

        <div className="frame-3">
          <div className="text-wrapper-6">My account</div>
          <div className="text-wrapper-7">********684</div>
          <Checkbox
            className="checkbox-2"
            state="unchecked"
            label="balance-3"
            amount="$42,370"
          />
        </div>
      </div>
    </div>
  );
};
