import MetaTitle from "@/components/MetaTitle";
import constants from "@/helpers/constants";
import { Fragment } from "react";

const home = (): JSX.Element => {
  const { metaData } = constants();
  return (
    <Fragment>
      <MetaTitle title={metaData.home} />
    </Fragment>
  );
};

export default home;
