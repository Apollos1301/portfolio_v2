import React from "react";

function SecondP() {
  return (
    <div className="w-[60%] p-10 text-textPrimary bg-secondaryBackground border-b-2 border-border rounded-md drop-shadow-md">
      <p className="border-b-2 border-border pb-[10%] pt-[10%]">
        As a native{" "}
        <span className="underline decoration-4 decoration-primaryAccent">
          German
        </span>{" "}
        speaker, I am also fluent in{" "}
        <span className="underline decoration-4 decoration-primaryAccent">
          Farsi {"(Persian)"}
        </span>{" "}
        and have business-fluent proficiency in{" "}
        <span className="underline decoration-4 decoration-primaryAccent">
          English.
        </span>{" "}
        My skills include{" "}
        <span className="underline decoration-4 decoration-secondaryAccent">
          Python, C++, C, Java, JavaScript and ReactJS
        </span>
        , enhancing my collaborative potential in the tech community.
      </p>
    </div>
  );
}

export default SecondP;
