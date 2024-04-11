import { Iheader } from "@/utils/interfaces";

const Header = ({ text, title }: Iheader): JSX.Element => {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Header;
