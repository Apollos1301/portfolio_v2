import React from "react";

function FirstP() {
  return (
    <div className="w-[60%] p-10 text-textPrimary bg-secondaryBackground border-b-2 border-border rounded-md">
      <p>
        I am a 23-year-old{" "}
        <span className="underline decoration-4 decoration-primaryAccent">
          computer science B.Sc.
        </span>{" "}
        student at Heinrich-Heine-University of Düsseldorf, living in{" "}
        <span className="underline decoration-4 decoration-primaryAccent">
          Cologne, Germany.
        </span>{" "}
        I have experience in{" "}
        <span className="underline decoration-4 decoration-secondaryAccent">
          web development
        </span>{" "}
        with ReactJS, NodeJS, and some Java Spring Boot backend, along with
        knowledge and experience in{" "}
        <span className="underline decoration-4 decoration-secondaryAccent">
          Machine Learning and Neural Networks development.
        </span>
      </p>
    </div>
  );
}

export default FirstP;
