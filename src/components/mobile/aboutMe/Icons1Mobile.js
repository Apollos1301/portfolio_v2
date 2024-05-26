import React from "react";
import gradCap from "../../../assets/graduationCap.svg";
import neuralNet from "../../../assets/neural_net_mobile.svg";

function Icons1Mobile() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-between">
      <img src={gradCap} alt="graduation cap" className="w-[30%] h-[30%]" />
      <img src={neuralNet} alt="neural network" className="w-[50%] h-[30%]" />
    </div>
  );
}

export default Icons1Mobile;
