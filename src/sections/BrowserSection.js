import React, { useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import LandingSection from "./LandingSection";
import SocialIcons from "../components/SocialIcons";
import AboutSection from "./AboutSection";
import FirstP from "../components/background/aboutMe/FirstP";
import SecondP from "../components/background/aboutMe/SecondP";
import ThirdP from "../components/background/aboutMe/ThirdP";
import Icons1 from "../components/background/aboutMe/Icons1";
import Icons2 from "../components/background/aboutMe/Icons2";
import Icons3 from "../components/background/aboutMe/Icons3";
import ProjectSection from "./ProjectSection";
import SingleProjectLeft from "../components/project/SingleProjectLeft";
import SingleProjectRight from "../components/project/SingleProjectRight";
import ContactSection from "./ContactSection";

import Privacy from "./Privacy";
import Legal from "./Legal";

function BrowserSection({ projects }) {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showLegal, setShowLegal] = useState(false);
  const parallax = useRef(null);
  const disablePrivacy = () => {
    setShowPrivacy(false);
  };
  const disableLegal = () => {
    setShowLegal(false);
  };
  if (showPrivacy) {
    return <Privacy disable={disablePrivacy} />;
  }
  if (showLegal) {
    return <Legal disable={disableLegal} />;
  }
  return (
    <div className="w-[100%] h-[100%] bg-background">
      <Parallax
        ref={parallax}
        pages={6.7 + projects.length * 0.5 + 0.8 + 1}
        className="bg-background"
      >
        <LandingSection />
        <ParallaxLayer offset={1.4} speed={0}>
          <SocialIcons />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.85, end: 1.35 }}
          className="pointer-events-none"
        >
          <AboutSection />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 1.8, end: 2.5 }}
          className="flex items-center justify-items-center place-content-center"
        >
          <FirstP />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 3.2, end: 3.9 }}
          className="flex items-center justify-items-center place-content-center"
        >
          <SecondP />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 4.6, end: 5.3 }}
          className="flex items-center justify-items-center place-content-center"
        >
          <ThirdP />
        </ParallaxLayer>
        <ParallaxLayer offset={2.3} speed={1}>
          <Icons1 />
        </ParallaxLayer>
        <ParallaxLayer offset={3.9} speed={1}>
          <Icons2 />
        </ParallaxLayer>
        <ParallaxLayer offset={5.1} speed={1}>
          <Icons3 />
        </ParallaxLayer>
        <ParallaxLayer offset={6.1} speed={0.5}>
          <ProjectSection />
        </ParallaxLayer>
        {projects.map((obj, index) => {
          return (
            <ParallaxLayer offset={6.7 + index * 0.5} speed={0} factor={0.5}>
              {index % 2 == 0 ? (
                <SingleProjectRight
                  title={obj.name}
                  description={obj.description}
                  link={obj.link}
                />
              ) : (
                <SingleProjectLeft
                  title={obj.name}
                  description={obj.description}
                  link={obj.link}
                />
              )}
            </ParallaxLayer>
          );
        })}
        <ParallaxLayer
          offset={6.7 + projects.length * 0.5 + 0.3}
          speed={0.2}
          factor={0.5}
          className="flex place-content-center items-center"
        >
          <h2 className="font-inter text-textPrimary text-5xl text-center underline">
            Contact me!
          </h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={6.7 + projects.length * 0.5 + 0.8}
          speed={0}
          factor={0.5}
        >
          <ContactSection />
        </ParallaxLayer>
        <ParallaxLayer
          offset={6.7 + projects.length * 0.5 + 0.8 + 0.8}
          speed={0}
          factor={0.2}
          className="bg-secondaryBackground border-t-2 border-border flex justify-center items-center gap-10 text-textPrimary"
        >
          <div onClick={() => setShowPrivacy(true)} className="cursor-pointer">
            Privacy
          </div>
          <div onClick={() => setShowLegal(true)} className="cursor-pointer">
            Legal
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default BrowserSection;
