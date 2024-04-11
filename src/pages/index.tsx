import Layout from "@/components/layouts/Layout";
import MetaTitle from "@/components/MetaTitle";
import Choices from "@/components/sections/home/Choices";
import Companies from "@/components/sections/home/Companies";
import Footer from "@/components/sections/home/Footer";
import Hero from "@/components/sections/home/Hero";
import Services from "@/components/sections/home/Services";
import Testimonials from "@/components/sections/home/Testimonials";
import constants from "@/helpers/constants";
import { Fragment } from "react";

const home = (): JSX.Element => {
  const { metaData } = constants();
  return (
    <Fragment>
      <MetaTitle title={metaData.home} />
      <section id="home">
        <Layout>
          <Hero />
          <Companies />
          <Services />
          <Choices />
          <Testimonials />
          <Footer />
        </Layout>
      </section>
    </Fragment>
  );
};

export default home;
