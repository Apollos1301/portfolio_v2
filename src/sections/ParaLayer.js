import React, { useRef, useEffect, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
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
import SkillsSection from "./SkillsSection";
import ProjectSection from "./ProjectSection";
import SingleProjectLeft from "../components/project/SingleProjectLeft";
import SingleProjectRight from "../components/project/SingleProjectRight";
import ContactSection from "./ContactSection";

var myProjects = [
  {
    name: "Bombo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, cupiditate beatae molestiae dolorum minima iure cum architecto qui? Dignissimos esse vero laborum odio recusandae? Eos fuga libero error neque temporibus!",
    link: "https://www.google.com/",
  },
  {
    name: "Samba",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, cupiditate beatae molestiae dolorum minima iure cum architecto qui? Dignissimos esse vero laborum odio recusandae? Eos fuga libero error neque temporibus!",
    link: "https://www.google.com/",
  },
  {
    name: "Klamba",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, cupiditate beatae molestiae dolorum minima iure cum architecto qui? Dignissimos esse vero laborum odio recusandae? Eos fuga libero error neque temporibus!",
    link: "https://www.google.com/",
  },
];
export default function ParaLayer() {
  var myvalue = 5.7;
  const [projects, setProjects] = useState(myProjects);
  const parallax = useRef(null);
  useEffect(() => {
    // setInterval(() => {
    //   console.log(parallax.current.current);
    // }, 500);
    // console.log(parallax.current.content);
    // console.log(parallax.current.container);
  }, [parallax]);

  return (
    <>
      <BrowserView>
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
                <ParallaxLayer
                  offset={6.7 + index * 0.5}
                  speed={0}
                  factor={0.5}
                >
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
          </Parallax>
        </div>
      </BrowserView>
      <MobileView>
        <div className="w-[100%] h-[100%] bg-background">
          <Parallax
            horizontal={true}
            ref={parallax}
            pages={4}
            className="bg-background"
          >
            <LandingSection />
            <ParallaxLayer offset={1.9} speed={1.5} className="z-10">
              <div className="w-[100%] h-[50%] bg-red-500"></div>
            </ParallaxLayer>
            <AboutSection />
          </Parallax>
        </div>
      </MobileView>
    </>
  );
}
