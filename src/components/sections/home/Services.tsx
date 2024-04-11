import ServicesCard from "@/components/card/ServicesCard";
import constants from "@/helpers/constants";

const Services = (): JSX.Element => {
  const { servicesData } = constants();
  return (
    <section id="home__services">
      <div className="services-container">
        <div className="header">
          <h2>Our Services</h2>
          <p>
            Transform your brand with our innovative digital solutions that
            captivate and engage your audience.
          </p>
        </div>
        <div className="content">
          <div className="row gx-5">
            {servicesData.map((item, index) => (
              <div className="col-4" key={index}>
                <ServicesCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
