import constants from "@/helpers/constants";
import { useRouter } from "next/router";
import { Fragment } from "react";
import NavbarResponsive from "./NavbarResponsive";
import MenuIcon from "./MenuIcon";
import { useNav } from "@/hooks/useNav";

const Navbar = (): JSX.Element => {
  const { navData } = constants();
  const router = useRouter();
  const { menuToogle } = useNav();
  return (
    <Fragment>
      <nav id="navbar">
        <div className="logo">
          <img src="/logo.png" alt="" />
        </div>
        <div className="menu-items d-none d-lg-flex">
          <ul>
            {navData.map((item, index) => (
              <li key={index} id={router.pathname === item.url ? "active" : ""}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="auth-buttons d-none d-lg-flex">
          <button className="btn">Contact us</button>
        </div>

        <MenuIcon toogle={menuToogle} />
      </nav>

      <NavbarResponsive />
    </Fragment>
  );
};

export default Navbar;
