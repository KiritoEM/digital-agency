import ChoicesCard from "@/components/card/ChoicesCard";
import constants from "@/helpers/constants";

const Choices = (): JSX.Element => {
  const { choicesData } = constants();
  return (
    <section id="home__choices">
      <div className="choices-container">
        <div className="header">
          <h2>Why Choose SquareUp?</h2>
          <p>
            Experience excellence in digital craftsmanship with our team of
            skilled professionals dedicated to delivering exceptional results.
          </p>
        </div>
        <div className="content">
          <div className="row gx-5 gy-5">
            {choicesData.map((item, index) => (
              <div className="col-6" key={index}>
                <ChoicesCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choices;
