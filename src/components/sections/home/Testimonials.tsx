import TestimonialsCard from "@/components/card/TestimonialsCard";
import Header from "@/components/section-header/Header";
import constants from "@/helpers/constants";

const Testimonials = (): JSX.Element => {
  const { testimonialsData } = constants();
  console.log(testimonialsData);
  return (
    <section id="home__testimonials">
      <div className="testimonials-container">
        <Header
          title="What our Clients say About us"
          text="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients"
        />

        <div className="content">
          <div className="row gx-5 gy-5">
            {testimonialsData.map((item, index) => (
              <div className="col-6" key={index}>
                <TestimonialsCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
