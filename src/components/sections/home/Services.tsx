import ServicesCard from "@/components/card/ServicesCard";

const Services = (): JSX.Element => {
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
          <div className="row">
            <div className="col-4">
              <ServicesCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
