import constants from "@/helpers/constants";
import { useRouter } from "next/router";

const NavbarResponsive = (): JSX.Element => {
  const { navData } = constants();
  const router = useRouter();
  return (
    <nav id="navbar-responsive" className="d-lg-none">
      <div id="navbar-responsive__container">
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
      </div>
    </nav>
  );
};

export default NavbarResponsive;
