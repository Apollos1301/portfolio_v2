import React from "react";
import gradCap from "../../../assets/graduationCap.svg";
import neuralNet from "../../../assets/neural_net.svg";

function Icons1() {
  return (
    <div className=" flex items-center justify-between">
      <img
        src={gradCap}
        alt="graduation cap"
        className="w-[10%] h-[10%] ml-[5%]"
      />
      <img src={neuralNet} alt="neural network" className="w-[20%] h-[20%]" />
    </div>
  );
}

export default Icons1;
