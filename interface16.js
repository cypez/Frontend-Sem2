import React from "react";
import PropertyDefaultWrapper from "./PropertyDefaultWrapper";
import { StatusBar } from "./StatusBar";
import { TabBar } from "./TabBar";
import Transaction from "./Transaction";
import antDesignSwapOutlined from "./ant-design-swap-outlined.svg";
import arrow3 from "./arrow-3.svg";
import ellipse46 from "./ellipse-46.png";
import image32 from "./image-32.png";
import image from "./image.svg";
import maskGroup from "./mask-group.png";
import vector from "./vector.svg";
import vector2 from "./vector-2.svg";
import union2 from "./union-2.svg";
import "./style.css";

export const Interface = () => {
  return (
    <div className="interface">
      <div className="div-2">
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
            <img className="mask-group" alt="Mask group" src={maskGroup} />
            <img className="vector" alt="Vector" src={vector} />
            <img className="img" alt="Vector" src={image} />
          </div>
          <div className="text-wrapper-2">WalletSync</div>
        </div>

        <div className="overlap">
          <TabBar
            balancesText="Wallet"
            className="tab-bar-instance"
            concreteComponentNodeProperty1="active"
            concreteComponentNodeText="Market"
            dividerDividerClassName="tab-bar-2"
            propertyNavWrapperHasBody={false}
            propertyNavWrapperIcon={
              <PropertyDefaultWrapper property1="default" />
            }
          />
          <div className="ant-design-swap">
            <img className="ant-design-swap" alt="Ant design swap" src={antDesignSwapOutlined} />
          </div>
        </div>

        <div className="text-wrapper-3">Swap</div>

        <div className="group">
          <img className="arrow" alt="Arrow" src={arrow3} />
        </div>

        <div className="text-wrapper-4">Swap</div>

        <div className="overlap-2">
          <img className="image" alt="Image" src={image32} />
          <div className="text-wrapper-5">Civic coin</div>
          <div className="text-wrapper-6">2.5</div>
        </div>

        <div className="text-wrapper-7">&gt;</div>

        <div className="text-wrapper-8">To</div>

        <div className="frame-2">
          <div className="text-wrapper-9">VERIFY</div>
        </div>

        <div className="element-CIV-WLD-token">
          1 CIV&nbsp;&nbsp;0.75 WLD Token
        </div>

        <div className="overlap-3">
          <div className="text-wrapper-10">World coin</div>
          <div className="text-wrapper-11">PLAID powered fiat conversion</div>
          <img className="ellipse" alt="Ellipse" src={ellipse46} />
          <div className="text-wrapper-12">750WLD</div>
        </div>

        <div className="text-wrapper-13">From</div>
      </div>
    </div>
  );
};
