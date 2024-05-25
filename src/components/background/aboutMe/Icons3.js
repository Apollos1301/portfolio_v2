import React from "react";
import airplaneSvg from "../../../assets/airplane.svg";
import panSvg from "../../../assets/pan.svg";

function Icons3() {
  return (
    <div className=" flex items-center justify-between">
      <img
        src={airplaneSvg}
        alt="speaking man"
        className="w-[10%] h-[10%] ml-[5%]"
      />
      <img src={panSvg} alt="python icon" className="w-[10%] h-[10%] mr-[5%]" />
    </div>
  );
}

export default Icons3;
