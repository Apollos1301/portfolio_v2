import React, { useState } from "react";
import { useSpring, useInView, animated } from "@react-spring/web";
import linkedInIcon from "../assets/social/linkedIn.png";
import githubIcon from "../assets/social/github.png";
import kaggleIcon from "../assets/social/kaggle.png";

function SocialIcons() {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "-10% 0%",
    }
  );

  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  // Animation config
  const props1 = useSpring({
    transform: hover1 ? "scale(1.1)" : "scale(1)",
    config: { mass: 1, tension: 120, friction: 14 },
  });
  const props2 = useSpring({
    transform: hover2 ? "scale(1.1)" : "scale(1)",
    config: { mass: 1, tension: 120, friction: 14 },
  });
  const props3 = useSpring({
    transform: hover3 ? "scale(1.1)" : "scale(1)",
    config: { mass: 1, tension: 120, friction: 14 },
  });
  return (
    <animated.div
      ref={ref}
      style={springs}
      className="w-full flex items-center gap-[10rem] place-content-center"
    >
      <a
        href="https://www.kaggle.com/apollos1301"
        target="_blank"
        rel="noopener noreferrer"
      >
        <animated.div
          style={{ ...props1 }}
          className="w-[6.5rem] h-[6.5rem] relative"
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
        >
          <div className="absolute w-full h-full bg-background opacity-40 z-10 cursor-pointer" />
          <img src={kaggleIcon} alt="kaggle" className="absolute" />
        </animated.div>
      </a>
      <a
        href="https://www.linkedin.com/in/abtin-pourhadi-60510423a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <animated.div
          style={{ ...props2 }}
          className="w-[6.5rem] h-[6.5rem] relative"
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
        >
          <div className="absolute w-full h-full bg-background opacity-40 z-10 cursor-pointer" />
          <img src={linkedInIcon} alt="linkedIn" />
        </animated.div>
      </a>
      <a
        href="https://github.com/Apollos1301"
        target="_blank"
        rel="noopener noreferrer"
      >
        <animated.div
          style={{ ...props3 }}
          className="w-[6.5rem] h-[6.5rem] relative"
          onMouseEnter={() => setHover3(true)}
          onMouseLeave={() => setHover3(false)}
        >
          <div className="absolute w-full h-full bg-background opacity-40 z-10 cursor-pointer" />
          <img src={githubIcon} alt="github" />
        </animated.div>
      </a>
    </animated.div>
  );
}

export default SocialIcons;
