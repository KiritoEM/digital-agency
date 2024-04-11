import TestimonialsCard from "@/components/card/TestimonialsCard";
import Header from "@/components/section-header/Header";

const Testimonials = (): JSX.Element => {
  return (
    <section id="home__testimonials">
      <div className="testimonials-container">
        <Header
          title="What our Clients say About us"
          text="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients"
        />

        <div className="content">
          <div className="row gx-5">
            <div className="col-6">
              <TestimonialsCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
