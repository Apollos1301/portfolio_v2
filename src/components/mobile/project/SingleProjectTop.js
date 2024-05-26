import React from "react";
import { useSpring, useInView, animated } from "@react-spring/web";
import spinningWheelRight from "../../../assets/spinningWheelRight.svg";

function SingleProjectTop({ title, description, link }) {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: -100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "0% 0%",
    }
  );
  return (
    <div className="w-full h-full flex">
      <div className="flex flex-col w-full h-[75%] place-content-start items-center">
        <div className="w-[80%] h-[25%] flex items-start ">
          <animated.img
            ref={ref}
            style={springs}
            src={spinningWheelRight}
            className="w-full h-full"
            alt="spinning wheel"
          />
        </div>
        <animated.div
          style={springs}
          className=" font-inter text-textPrimary border-t-2 border-r-2 border-border h-[85%] w-full flex flex-col justify-between p-5"
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

export default SingleProjectTop;
