import FadeAnimation from "@/components/animations/FadeAnimations";
import ServicesCard from "@/components/card/ServicesCard";
import Header from "@/components/section-header/Header";
import constants from "@/helpers/constants";

const Services = (): JSX.Element => {
  const { servicesData } = constants();
  return (
    <section id="home__services">
      <div className="services-container">
        <FadeAnimation direction="bottom">
          <Header
            title="Our Services"
            text="Transform your brand with our innovative digital solutions that
            captivate and engage your audience."
          />
        </FadeAnimation>
        <div className="content">
          <div className="row gx-5 gy-5 gy-lg-2 d-flex">
            {servicesData.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <FadeAnimation direction="left">
                  <ServicesCard {...item} />
                </FadeAnimation>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
