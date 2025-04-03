import React from "react";
import { PropertyDefaultWrapper } from "./PropertyDefaultWrapper";
import { StatusBar } from "./StatusBar";
import { TabBar } from "./TabBar";
import antDesignSwapOutlined from "./ant-design-swap-outlined.svg";
import arrow3 from "./arrow-3.svg";
import ellipse1 from "./ellipse-1.png";
import image1 from "./image-1.png";
import maskGroup from "./mask-group.png";
import "./style.css";
import vector from "./vector.svg";

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
            <img className="img" alt="Vector" src={image1} />
          </div>
          <p className="wallet-sync">
            <span className="span">Wallet</span>
            <span className="text-wrapper-2">Sync</span>
          </p>
        </div>
      </div>
      <div className="overlap">
        <TabBar
          balancesText="Wallet"
          className="tab-bar-instance"
          concreteComponentNodeProperty1="active"
          concreteComponentNodeText="Market"
          dividerDividerClassName="tab-bar-2"
          propertyNavWrapperHasBody={false}
          propertyNavWrapperIcon={<PropertyDefaultWrapper property1="default" />}
        />
        <div className="text-wrapper-3">Swap</div>
        <img className="ant-design-swap" alt="Ant design swap" src={antDesignSwapOutlined} />
      </div>
      <div className="frame">
        <div className="text-wrapper-4">Crypto services</div>
        <div className="home-indicator">
          <div className="home-indicator-2" />
        </div>
        <div className="frame-2">
          <div className="text-wrapper-5">Identity</div>
          <div className="text-wrapper-6">Locked</div>
          <div className="text-wrapper-7">Recently used</div>
        </div>
        <div className="send-wrapper">
          <img className="send" alt="Send" src={image1} />
        </div>
      </div>
    </div>
  );
};
