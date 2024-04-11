import React from "react";

const Companies = (): JSX.Element => {
  return (
    <section id="home__companies">
      <div className="companies-container">
        <div className="sub-container">
          <p>Trusted By 250+ Companies</p>
        </div>
        <div className="companies-logo">
          {Array.from({ length: 6 }, (_, i) => (
            <img key={i + 1} src={`Logo${i + 1}.png`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
