import FadeAnimations from "@/components/animations/FadeAnimations";
import ChoicesCard from "@/components/card/ChoicesCard";
import Header from "@/components/section-header/Header";
import constants from "@/helpers/constants";

const Choices = (): JSX.Element => {
  const { choicesData } = constants();
  return (
    <section id="home__choices">
      <div className="choices-container">
        <FadeAnimations direction="bottom">
          <Header
            text=" Experience excellence in digital craftsmanship with our team of
            skilled professionals dedicated to delivering exceptional results."
            title="Why Choose SquareUp?"
          />
        </FadeAnimations>
        <div className="content">
          <div className="row gx-5 gy-5">
            {choicesData.map((item, index) => (
              <div className="col-lg-6" key={index}>
                <FadeAnimations direction="right">
                  <ChoicesCard {...item} />
                </FadeAnimations>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choices;
