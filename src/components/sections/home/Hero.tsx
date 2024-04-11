const Hero = (): JSX.Element => {
  return (
    <section id="home__hero">
      <div className="hero-container">
        <div className="title">
          <h1>A Digital Product Studio that will Work</h1>
        </div>
        <div className="for-buttons">
          <p>
            For <span className="span-active">Startups</span>,{"     "}
            <span className="span-active">Media & Publishers</span>and{"     "}
            <span className="span-active">Social Good</span>
          </p>
        </div>
        <div className="footer-buttons">
          <button className="btn">Our works</button>
          <button className="btn">Contact us</button>
        </div>
      </div>
      <div className="abstract-design">
        <img src="/abstract-design.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
