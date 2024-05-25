import React from "react";
import speakingSvg from "../../../assets/speaking.svg";
import pythonSvg from "../../../assets/python.svg";

export default function Icons2() {
  return (
    <div className=" flex items-center justify-between">
      <img
        src={speakingSvg}
        alt="speaking man"
        className="w-[10%] h-[10%] ml-[5%]"
      />
      <img
        src={pythonSvg}
        alt="python icon"
        className="w-[10%] h-[10%] mr-[5%]"
      />
    </div>
  );
}
