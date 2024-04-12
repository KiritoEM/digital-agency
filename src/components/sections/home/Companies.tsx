import FadeAnimation from "@/components/animations/FadeAnimations";
import React from "react";

const Companies = (): JSX.Element => {
  return (
    <section id="home__companies">
      <div className="companies-container">
        <div className="sub-container">
          <FadeAnimation direction="top">
            <p>Trusted By 250+ Companies</p>
          </FadeAnimation>
        </div>
        <div className="companies-logo">
          {Array.from({ length: 6 }, (_, i) => (
            <FadeAnimation direction="center">
              <img key={i + 1} src={`Logo${i + 1}.png`} />
            </FadeAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
