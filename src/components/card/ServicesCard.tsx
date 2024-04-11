import { IservicesCardData } from "@/utils/interfaces";

const ServicesCard = ({
  icon,
  text,
  title,
}: IservicesCardData): JSX.Element => {
  return (
    <article id="services-card">
      <img src={icon} alt="" />
      <h4>{title}</h4>
      <p>{text}</p>
    </article>
  );
};

export default ServicesCard;
