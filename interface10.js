import React from "react";
import { PrimaryButton } from "./PrimaryButton";
import { StatusBar } from "./StatusBar";
import clipPathGroup from "./clip-path-group.png";
import clipPathGroup2 from "./clip-path-group-2.png";
import clipPathGroup3 from "./clip-path-group-3.png";
import clipPathGroup4 from "./clip-path-group-4.png";
import clipPathGroup5 from "./clip-path-group-5.png";
import clipPathGroup6 from "./clip-path-group-6.png";
import clipPathGroup7 from "./clip-path-group-7.png";
import clipPathGroup8 from "./clip-path-group-8.png";
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
          alt="Clip path group"
          src={clipPathGroup}
        />
        <div className="overlap-group">
          <p className="p">Review the types of financial data you’ll be sharing</p>
          <img className="img" alt="Image" src={image31} />
        </div>

        <div className="items-outer">
          <div className="items">
            <div className="financial-info-item">
              <div className="icon-label">
                <div className="account-info" />
              </div>
              <div className="label-2">Account and balance info</div>
            </div>
            <div className="chevron-icon">
              <img
                className="clip-path-group-2"
                alt="Clip path group"
                src={clipPathGroup3}
              />
            </div>
          </div>

          <div className="financial-info-item">
            <div className="icon-label">
              <div className="acct-numbers" />
            </div>
            <div className="label-3">Account and routing numbers</div>
          </div>
          <div className="chevron-icon">
            <img
              className="clip-path-group-2"
              alt="Clip path group"
              src={clipPathGroup4}
            />
          </div>

          <div className="financial-info-item">
            <div className="icon-label">
              <div className="contact-info" />
            </div>
            <div className="label-4">Contact info</div>
          </div>
          <div className="chevron-icon">
            <img
              className="clip-path-group-2"
              alt="Clip path group"
              src={clipPathGroup5}
            />
          </div>

          <div className="financial-info-item">
            <div className="icon-label">
              <div className="investments" />
            </div>
            <div className="label-3">Investments</div>
          </div>
          <div className="chevron-icon">
            <img
              className="clip-path-group-2"
              alt="Clip path group"
              src={clipPathGroup6}
            />
          </div>

          <div className="financial-info-item">
            <div className="icon-label">
              <div className="transactions" />
            </div>
            <div className="label-4">Transactions</div>
          </div>
          <div className="chevron-icon">
            <img
              className="clip-path-group-2"
              alt="Clip path group"
              src={clipPathGroup7}
            />
          </div>
        </div>

        <div className="lower">
          <div className="CTA-footer">
            <div className="legal">
              <p className="by-continuing-you">
                Review the detailed info you’ll be sharing
              </p>
            </div>

            <PrimaryButton
              className="primary-button-instance"
              hasNewWindowIcon={false
