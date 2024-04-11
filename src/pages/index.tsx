import Layout from "@/components/layouts/Layout";
import MetaTitle from "@/components/MetaTitle";
import Companies from "@/components/sections/home/Companies";
import Hero from "@/components/sections/home/Hero";
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
        </Layout>
      </section>
    </Fragment>
  );
};

export default home;
