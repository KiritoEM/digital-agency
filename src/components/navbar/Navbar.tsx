import constants from "@/helpers/constants";
import { useRouter } from "next/router";
import { Fragment } from "react";

const Navbar = (): JSX.Element => {
  const { navData } = constants();
  const router = useRouter();
  return (
    <Fragment>
      <nav id="navbar">
        <div className="logo">
          <img src="/Logo.png" alt="" />
        </div>
        <div className="menu-items">
          <ul>
            {navData.map((item, index) => (
              <li key={index} id={router.pathname === item.url ? "active" : ""}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="auth-buttons">
          <button className="btn">Contact us</button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
