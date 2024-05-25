import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { ParallaxLayer } from "@react-spring/parallax";
import LandingBgSVG from "../components/background/LandingBgSVG";
// import landnigBg from "../assets/low-poly-grid.svg";
import landingBg from "../assets/landing_bg2.svg";
import profile_pic from "../assets/landing/profile_pic.jpg";
function LandingSection() {
  const [loaded, setLoaded] = useState(false);

  const styles1 = useSpring({
    backgroundColor: loaded ? "#ff938a" : "#F7F7F7",
    config: { duration: 500 },
  });

  const styles2 = useSpring({
    backgroundColor: loaded ? "#9f93be" : "#F7F7F7",
    config: { duration: 500 },
  });

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <ParallaxLayer
      offset={0}
      speed={0}
      factor={1.5}
      className={`w-screen h-screen z-5`}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${landingBg})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          zIndex: "-2",
          position: "absolute",
          opacity: 0.6,
        }}
      />
      <div className="absolute w-[100%] h-[100%] -z-1 bg-gradient-to-t from-background from-10% " />
      <div className="w-full h-full absolute flex flex-col lg:flex-row p-2 justify-between">
        <div className="w-[50%] h-[60%] flex p-5 lg:p-10 ml-5 items-center">
          <h1 className=" justify-self-start text-textPrimary text-left font-inter text-3xl lg:text-5xl ">
            Hello, i'm{" "}
            <animated.mark style={styles1} className="bg-primaryAccent">
              Abtin!{" "}
            </animated.mark>
            <br />
            <span className="text-xl lg:text-3xl">
              Your go-to expert in{" "}
              <animated.mark style={styles2} className="bg-secondaryAccent">
                Machine Learning
              </animated.mark>
              ,
              <animated.mark style={styles2} className="bg-secondaryAccent">
                {" "}
                Deep Learning
              </animated.mark>
              , and{" "}
              <animated.mark style={styles2} className="bg-secondaryAccent">
                Web Development
              </animated.mark>
              .
            </span>
          </h1>
        </div>
        <div className="flex w-[90%] lg:w-[40%] h-[60%] justify-start items-center">
          <div className="w-full h-full flex place-content-center items-center">
            <img
              src={profile_pic}
              alt="profile picture"
              className="h-[80%] border-2 border-border rounded-md"
            />
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default LandingSection;
