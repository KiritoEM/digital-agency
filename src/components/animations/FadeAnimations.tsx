import React, { useEffect, useRef, useState } from "react";
import { Ianimation } from "@/utils/interfaces";

const FadeAnimation = ({ children, direction }: Ianimation) => {
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
        threshold: 0.5,
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
      className={`fade-${direction} ${
        isVisible ? `fade-show__${direction}` : ""
      }`}
    >
      {children}
    </div>
  );
};

export default FadeAnimation;
