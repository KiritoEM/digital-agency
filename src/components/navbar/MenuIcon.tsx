import { InavProps } from "@/utils/interfaces";
import { Fragment } from "react";

const MenuIcon = ({ toogle }: InavProps): JSX.Element => {
  return (
    <Fragment>
      <img
        src="/menu-icon.png"
        alt=""
        className="menu-icon d-lg-none"
        onClick={() => toogle && toogle()}
      />
    </Fragment>
  );
};

export default MenuIcon;
