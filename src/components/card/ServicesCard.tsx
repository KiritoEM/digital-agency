import { IservicesCardData } from "@/utils/interfaces";

const ServicesCard = ({
  icon,
  text,
  title,
}: IservicesCardData): JSX.Element => {
  return (
    <article id="services-card">
      <div id="services-card__header">
        <img src={icon} alt="" />
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div id="services-card__button">
        {" "}
        <button className="btn">Learn more</button>
      </div>
    </article>
  );
};

export default ServicesCard;
