import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { BrowserView, MobileView } from "react-device-detect";
import wavingLeft from "../../assets/wavingHandLeft.svg";
import wavinRight from "../../assets/wavingHandRight.svg";

function ContactSectionMobile() {
  return (
    <div className="bg-background w-full h-full flex flex-col place-content-center items-center gap-10">
      <div className="w-[5rem] h-[5rem]">
        <img src={wavingLeft} alt="waving hand" />
      </div>
      <div className="w-[85%] bg-secondaryBackground p-5 border-b-2 border-border">
        <p className="w-full font-inter text-textPrimary text-[1rem] text-center leading-8 ">
          Thank you for visiting my portfolio. If you're looking for a skilled
          ML and web developer, have a project you’d like to discuss, or just
          want to connect, I’d love to hear from you. Drop me an email at{" "}
          <a
            href="mailto:abtin.pourhadi@posteo.de"
            className="text-blue-700 underline decoration-2 decoration-primaryAccent"
          >
            abtin.pourhadi@posteo.de
          </a>
          , and let's turn your ideas into reality. I look forward to the
          opportunity to collaborate and innovate together.
        </p>
      </div>
      <div className="w-[5rem] h-[5rem]">
        <img src={wavinRight} alt="waving hand" />
      </div>
    </div>
  );
}

export default ContactSectionMobile;
