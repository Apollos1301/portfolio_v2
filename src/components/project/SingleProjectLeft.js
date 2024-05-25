import React from "react";
import { useSpring, useInView, animated } from "@react-spring/web";
import spinningWheelLeft from "../../assets/spinningWheelLeft.svg";

function SingleProjectLeft({ title, description, link }) {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      rootMargin: "-20% 0%",
    }
  );
  return (
    <div className="w-full h-full flex place-content-start items-center">
      <div className="flex h-full w-[75%]">
        <div className="h-full w-[15%] flex place-content-center items-center">
          <animated.img
            ref={ref}
            style={springs}
            src={spinningWheelLeft}
            alt="spinning wheel"
          />
        </div>
        <animated.div
          style={springs}
          className="font-inter text-textPrimary border-l-2 border-b-2 border-border h-full w-[85%] flex flex-col justify-between p-5"
        >
          <h4 className="text-2xl underline decoration-2 self-center">
            Title: {title}
          </h4>
          <p className="text-textSecondary">{description}</p>
          <a
            className="text-blue-700 self-center"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            click here to view the project!
          </a>
        </animated.div>
      </div>
    </div>
  );
}

export default SingleProjectLeft;
