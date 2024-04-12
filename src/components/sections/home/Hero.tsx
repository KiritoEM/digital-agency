import FadeAnimation from "@/components/animations/FadeAnimations";

const Hero = (): JSX.Element => {
  return (
    <section id="home__hero">
      <div className="hero-container">
        <FadeAnimation direction="bottom">
          <div className="title">
            <h1>A Digital Product Studio that will Work</h1>
          </div>
        </FadeAnimation>
        <FadeAnimation direction="bottom">
          <div className="for-buttons d-none d-lg-flex">
            <p>
              For <span className="span-active">Startups</span>,{"     "}
              <span className="span-active">Media & Publishers</span>and
              {"     "}
              <span className="span-active">Social Good</span>
            </p>
          </div>
          <div className="for-buttons text-center d-lg-none">
            <p>For Startup Media & Publishersand Social Good</p>
          </div>
        </FadeAnimation>
        <FadeAnimation direction="bottom">
          <div className="footer-buttons">
            <button className="btn">Our works</button>
            <button className="btn">Contact us</button>
          </div>
        </FadeAnimation>
      </div>
      <div className="abstract-design">
        <img src="/abstract-design.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
