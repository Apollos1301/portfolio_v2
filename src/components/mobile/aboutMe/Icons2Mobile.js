import React from "react";
import speakingSvg from "../../../assets/speaking.svg";
import pythonSvg from "../../../assets/python.svg";

export default function Icons2Mobile() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-between">
      <img src={speakingSvg} alt="speaking man" className="w-[30%] h-[30%]" />
      <img src={pythonSvg} alt="python icon" className="w-[30%] h-[30%]" />
    </div>
  );
}
