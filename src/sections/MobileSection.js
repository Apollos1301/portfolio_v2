import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";

import LandingSectionMobile from "./mobile/LandingSectionMobile";
import SocialIconsMobile from "../components/mobile/SocialIconsMobile";
import FirstP_mobile from "../components/mobile/aboutMe/FirstP_mobile";
import SecondP_mobile from "../components/mobile/aboutMe/SecondP_mobile";
import ThirdP_mobile from "../components/mobile/aboutMe/ThirdP_mobile";
import Icon1_mobile from "../components/mobile/aboutMe/Icons1_mobile";
import Icon2_mobile from "../components/mobile/aboutMe/Icons2_mobile";
import Icon3_mobile from "../components/mobile/aboutMe/Icons3_mobile";
import SingleProjectTop from "../components/mobile/project/SingleProjectTop";
import SingleProjectBottom from "../components/mobile/project/SingleProjectBottom";
import ContactSectionMobile from "./mobile/ContactSectionMobile";
function MobileSection({ projects }) {
  const parallax = useRef(null);

  return (
    <div className="w-[100%] h-[100%] bg-background">
      <Parallax
        horizontal={true}
        ref={parallax}
        pages={9.5 + projects.length * 1 + 0.8 + 1}
        className="bg-background"
      >
        <LandingSectionMobile />
        <ParallaxLayer offset={1.4} speed={0} factor={0.5}>
          <SocialIconsMobile />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.85, end: 1.35 }}
          className="pointer-events-none"
        >
          <AboutSection />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 2.4, end: 3 }}
          className="flex items-center justify-items-center place-content-center"
        >
          <FirstP_mobile />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 4.4, end: 5 }}
          className="flex items-center justify-items-center place-content-center"
        >
          <SecondP_mobile />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 6.4, end: 7 }}
          className="flex items-center justify-items-center place-content-center"
        >
          <ThirdP_mobile />
        </ParallaxLayer>
        <ParallaxLayer offset={2.9} speed={1}>
          <Icon1_mobile />
        </ParallaxLayer>
        <ParallaxLayer offset={4.9} speed={1}>
          <Icon2_mobile />
        </ParallaxLayer>
        <ParallaxLayer offset={6.9} speed={1}>
          <Icon3_mobile />
        </ParallaxLayer>
        <ParallaxLayer offset={8.3} speed={0.5}>
          <ProjectSection />
        </ParallaxLayer>
        {projects.map((obj, index) => {
          return (
            <ParallaxLayer offset={9.5 + index * 1} speed={0} factor={1}>
              {index % 2 == 0 ? (
                <SingleProjectTop
                  title={obj.name}
                  description={obj.description}
                  link={obj.link}
                />
              ) : (
                <SingleProjectBottom
                  title={obj.name}
                  description={obj.description}
                  link={obj.link}
                />
              )}
            </ParallaxLayer>
          );
        })}
        <ParallaxLayer
          offset={9.5 + projects.length * 1 + 0.3}
          speed={0.2}
          factor={0.5}
          className="flex place-content-center items-center"
        >
          <h2 className="font-inter text-textPrimary text-5xl text-center underline">
            Contact me!
          </h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={9.5 + projects.length * 1 + 0.8}
          speed={0}
          factor={1}
        >
          <ContactSectionMobile />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default MobileSection;
