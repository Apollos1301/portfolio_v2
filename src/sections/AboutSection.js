import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { BrowserView, MobileView } from "react-device-detect";
import aboutBg from "../assets/layered-peaks.svg";
import FirstP from "../components/background/aboutMe/FirstP";
import arrowDown from "../assets/arrowDown.svg";
function AboutSection() {
  return (
    <div className="pl-5">{/* <img src={arrowDown} alt="" srcset="" /> */}</div>
    // <ParallaxLayer
    //   offset={1.5}
    //   speed={0}
    //   factor={5}
    //   style={{
    //     // backgroundImage: `url(${aboutBg})`,
    //     backgroundPosition: "center",
    //     backgroundSize: "cover",
    //   }}
    //   className="bg-background flex flex-col z-1"
    // />
  );
}

export default AboutSection;
