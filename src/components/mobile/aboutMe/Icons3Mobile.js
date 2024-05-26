import React from "react";
import airplaneSvg from "../../../assets/airplane.svg";
import panSvg from "../../../assets/pan.svg";

function Icons3Mobile() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-between">
      <img src={airplaneSvg} alt="speaking man" className="w-[30%] h-[30%]" />
      <img src={panSvg} alt="python icon" className="w-[30%] h-[30%]" />
    </div>
  );
}

export default Icons3Mobile;
