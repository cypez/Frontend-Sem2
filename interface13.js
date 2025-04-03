import React from "react";
import PropertyDefaultWrapper from "./PropertyDefaultWrapper";
import { StatusBar } from "./StatusBar";
import { TabBar } from "./TabBar";
import antDesignSwapOutlined from "./ant-design-swap-outlined.svg";
import card4Mask from "./card-4-mask.png";
import ellipse1 from "./ellipse-1.png";
import ellipse2 from "./ellipse-2.png";
import ellipse3 from "./ellipse-3.png";
import image3 from "./image-3.png";
import image4 from "./image-4.png";
import image5 from "./image-5.png";
import maskGroup from "./mask-group.png";
import notch from "./notch.svg";
import vector from "./vector.svg";
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
      </div>
      
      <div className="logo">
        <div className="overlap-group">
          <div className="mask-group" alt="Mask group" src={maskGroup} />
          <img className="vector" alt="vector" src={vector} />
        </div>
      </div>
      
      <p className="wallet-sync">
        <span className="span">Wallet</span>
        <span className="text-wrapper-2">Sync</span>
      </p>

      <div className="overlap">
        <div className="card">
          <div className="overlap-2">
            <div className="card-bg">
              <img className="card-mask" alt="Card mask" src={card4Mask} />
            </div>
          </div>
        </div>
        
        <img className="ellipse" alt="Ellipse" src={ellipse1} />
        <img className="ellipse-2" alt="Ellipse" src={ellipse2} />
        <img className="notch" alt="Notch" src={notch} />
      </div>

      <div className="overlap-3">
        <TabBar
          balancesText="Wallet"
          className="tab-bar-instance"
          concreteComponentNodeProperty1="active"
          concreteComponentNodeText="Market"
          dividerDividerClassName="tab-bar-2"
          propertyNavWrapperHasBody={false}
          propertyNavWrapperIcon={<PropertyDefaultWrapper property1="default" />}
        />
        <img className="ant-design-swap" alt="Ant design swap" src={antDesignSwapOutlined} />
        <div className="text-wrapper-3">Swap</div>
      </div>

      <div className="frame-2">
        <div className="text-wrapper-4">Binance</div>
        <img className="image" alt="Image" src={image3} />
      </div>
      
      <div className="frame-3">
        <div className="text-wrapper-5">Coinbase</div>
        <img className="image-2" alt="Image" src={image4} />
      </div>
      
      <div className="frame-4">
        <div className="text-wrapper-6">Uniswap</div>
        <img className="image-3" alt="Image" src={image5} />
      </div>

      <div className="text-wrapper-7">Government services</div>
      <div className="text-wrapper-8">Crypto services</div>
      
      <div className="home-indicator">
        <div className="home-indicator-2"></div>
      </div>
    </div>
  );
};
