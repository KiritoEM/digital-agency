import { Ichildren } from "@/utils/interfaces";
import { Fragment } from "react";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }: Ichildren): JSX.Element => {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
};

export default Layout;
