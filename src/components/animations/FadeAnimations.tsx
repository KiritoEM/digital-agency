import React, { useEffect, useRef, useState } from "react";
import { Ichildren } from "@/utils/interfaces";

const FadeAnimation = ({ children }: Ichildren) => {
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
        threshold: 0.6,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      //   console.log(sectionRef.current.clientWidth);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={`fade ${isVisible ? "show" : ""}`}>
      {children}
    </div>
  );
};

export default FadeAnimation;
