import React, { useEffect, useRef, useState } from "react";
import { Ianimation } from "@/utils/interfaces";

const FadeAnimation = ({ children, direction }: Ianimation) => 

  return (
    <div
      ref={sectionRef}
      className={`fade-${direction} ${
        isVisible ? `fade-show__${direction}` : ""
      }`}
    >
      {children}
    </div>
  );
};

export default FadeAnimation;
