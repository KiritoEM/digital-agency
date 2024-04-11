import Layout from "@/components/layouts/Layout";
import MetaTitle from "@/components/MetaTitle";
import constants from "@/helpers/constants";
import { Fragment } from "react";

const home = (): JSX.Element => {
  const { metaData } = constants();
  return (
    <Fragment>
      <MetaTitle title={metaData.home} />
      <section id="home"> 
        <Layout>
          <h1>Hello</h1>
        </Layout>
      </section>
    </Fragment>
  );
};

export default home;
