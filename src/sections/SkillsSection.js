import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { BrowserView, MobileView } from "react-device-detect";

function SkillsSection() {
  return (
    <ParallaxLayer className="bg-background" offset={2} speed={0}>
      SkillsSection
    </ParallaxLayer>
  );
}

export default SkillsSection;
