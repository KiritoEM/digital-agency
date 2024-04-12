import constants from "@/helpers/constants";

const Footer = (): JSX.Element => {
  const { navData, links } = constants();
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
              <li key={index}>{item.label}</li>
            ))}
          </ul>
        </div>
        <div className="social">
          <p>Stay connected</p>
          <img src="/social.png" alt="" />
        </div>
      </section>
      <div className="line"></div>
      <section id="home-footer__secondary">
        <div className="links">
          {links.map((item, index) => (
            <div className="link" key={index}>
              <img src={item.icon} alt="" />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
        <div className="copyright">
          <p>© 2023 SquareUp. All rights reserved.</p>
        </div>
      </section>
    </section>
  );
};

export default Footer;
