import constants from "@/helpers/constants";

const Footer = (): JSX.Element => {
  const { navData } = constants();
  navData.push({ url: "", label: "Contact" });
  return (
    <section id="home-footer">
      <section id="home-footer__primary">
        <div className="logo">
          <img src="/logo.png" alt="" />
        </div>
        <div className="footer-items">
          <ul>
            {navData.map((item, index) => (
              <li>{item.label}</li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Footer;
