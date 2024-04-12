import constants from "@/helpers/constants";
import { useNav } from "@/hooks/useNav";
import { useRouter } from "next/router";

const NavbarResponsive = (): JSX.Element => {
  const { navData } = constants();
  const router = useRouter();
  const { openMenu } = useNav();
  return (
    <nav id="navbar-responsive" className={openMenu ? "" : "disable-nav"}>
      <div
        id="navbar-responsive__container"
        className={openMenu ? "show-menu" : "close-menu"}
      >
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
