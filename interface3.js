import React from "react";
import { StatusBar } from "./StatusBar";  // Assuming you have this component for the status bar
import image1 from "./image-10.png";
import image2 from "./image-11.png";
import image3 from "./image-12.png";
import image4 from "./image-13.png";
import image5 from "./image-14.png";
import image6 from "./image-15.png";
import image7 from "./image-16.png";
import image8 from "./image-17.png";
import image9 from "./image-18.png";
import image10 from "./image-19.png";
import rectangle1857 from "./rectangle-1857.png";
import rectangle1858 from "./rectangle-1858.png";
import rectangle1859 from "./rectangle-1859.png";
import rectangle1860 from "./rectangle-1860.png";
import "./style.css"; // Import your custom CSS

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
          time="time.svg"
          timeClassName="design-component-instance-node"
          wifi="wifi-2.svg"
        />
        
        <div className="overlap-group">
          <img className="vector" alt="Rectangle" src={rectangle1857} />
          <img className="img" alt="Rectangle" src={rectangle1858} />
        </div>

        <div className="text-wrapper-2">Education</div>
        <div className="text-wrapper-3">Profile</div>

        <div className="frame">
          <img className="rectangle-2" alt="Rectangle" src={rectangle1859} />
        </div>

        <div className="text-wrapper-4">Vehicle license</div>
        <div className="text-wrapper-5">Property</div>
        
        <div className="frame-2">
          <img className="image" alt="Image" src={image1} />
        </div>
        
        <div className="frame-3">
          <img className="image" alt="Image" src={image2} />
        </div>

        <div className="frame-4">
          <div className="text-wrapper-6">Connections</div>
        </div>
        
        <div className="frame-5">
          <img className="image-2" alt="Image" src={image3} />
        </div>
        
        <div className="frame-6">
          <img className="image-3" alt="Image" src={image4} />
        </div>
        
        <div className="frame-7">
          <img className="image-4" alt="Image" src={image5} />
        </div>

        <div className="frame-8">
          <div className="text-wrapper-7">Send/receive token</div>
        </div>

        <div className="frame-9">
          <div className="text-wrapper-8">Scan code</div>
        </div>

        <div className="frame-10">
          <img className="image-5" alt="Image" src={image6} />
        </div>

        <div className="frame-11">
          <div className="text-wrapper-9">Identity Information</div>
        </div>

        <div className="frame-12">
          <img className="image-6" alt="Image" src={image7} />
        </div>

        <div className="frame-13">
          <div className="text-wrapper-10">Send/receive token</div>
        </div>

        <div className="frame-14">
          <div className="text-wrapper-11">Metamask</div>
        </div>

        <div className="frame-15">
          <img className="image-7" alt="Image" src={image8} />
        </div>

        <div className="frame-16">
          <div className="text-wrapper-12">Coinbase</div>
        </div>

        <div className="frame-17">
          <div className="text-wrapper-13">Connect wallet</div>
        </div>
      </div>
    </div>
  );
};
