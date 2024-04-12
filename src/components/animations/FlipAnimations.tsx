import React, { useEffect, useRef, useState } from "react";
import { Ianimation } from "@/utils/interfaces";

const FlipAnimation = ({ children, direction }: Ianimation) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement | any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(sectionRef.current!);
        }
      },
      {
        threshold: 0,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`flip-${direction} ${
        isVisible ? `flip-show__${direction}` : ""
      }`}
    >
      {children}
    </div>
  );
};

export default FlipAnimation;
