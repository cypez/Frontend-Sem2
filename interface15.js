import React from "react";
import { PropertyDefaultWrapper } from "./PropertyDefaultWrapper";
import { StatusBar } from "./StatusBar";
import { TabBar } from "./TabBar";
import { Transaction } from "./Transaction";
import antDesignSwapOutlined from "./ant-design-swap-outlined.svg";
import arrow3 from "./arrow-3.svg";
import image from "./image.svg";
import maskGroup from "./mask-group.png";
import union2 from "./union-2.svg";
import vector2 from "./vector-2.svg";
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
        <div className="logo">
          <div className="overlap-group">
            <img
              className="mask-group"
              alt="Mask group"
              src={maskGroup}
            />
            <img
              className="vector"
              alt="Vector"
              src={vector}
            />
            <img
              className="img"
              alt="Vector"
              src={image}
            />
          </div>
          <p className="wallet-sync">
            <span className="span">Wallet</span>
            <span className="text-wrapper-3">Sync</span>
          </p>
        </div>

        <div className="group">
          <div className="arrow-wrapper">
            <img
              className="arrow"
              alt="Arrow"
              src={arrow3}
            />
          </div>
          <div className="text-wrapper-4">Wallet</div>
        </div>

        <div className="card-2">
          <div className="text-wrapper-5">Credit Card</div>
          <img
            className="union"
            alt="Union"
            src={union2}
          />
          <img
            className="vector-2"
            alt="Vector"
            src={vector2}
          />
        </div>

        <div className="info-3">
          <div className="text-wrapper-6">Nr que</div>
          <div className="info-4">
            <div className="element-2">**** 4512</div>
            <div className="element-3">09/26</div>
          </div>
        </div>

        <div className="overlap">
          <div className="balance">
            <div className="text-wrapper-7">Current balance</div>
            <div className="element-4">$27,834</div>
          </div>
          <div className="buttons">
            <div className="deposit">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper-8">Deposit</div>
                </div>
              </div>
            </div>
            <div className="withdraw">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-3">
                  <div className="text-wrapper-9">Withdraw</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="transaction-2">
          <div className="title">
            <div className="text-wrapper-5">Transaction</div>
            <div className="text-wrapper-10">Last 4 days</div>
          </div>
          <div className="list">
            <Transaction
              className="transaction-instance"
              cryptoNameBitcoinClassName="transaction-3"
              divClassName="transaction-4"
              text="$73,966.43"
            />
            <Transaction
              className="transaction-5"
              cryptoName="ethereum"
              cryptoNameBitcoinClassName="transaction-6"
              divClassName="transaction-4"
              text="$6,557.56"
              text2="ETH"
            />
          </div>
        </div>

        <div className="overlap-2">
          <TabBar
            balancesText="Wallet"
            className="tab-bar-instance"
            concreteComponentNodeProperty1="active"
            concreteComponentNodeText="Market"
            dividerDividerClassName="tab-bar-2"
            propertyNavWrapperHasBody={false}
            propertyNavWrapperIcon={<PropertyDefaultWrapper property1="default" />}
          />
        </div>
      </div>
    </div>
  );
};
