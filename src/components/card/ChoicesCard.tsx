import { IservicesCardData } from "@/utils/interfaces";

const ChoicesCard = ({ icon, text, title }: IservicesCardData): JSX.Element => {
  return (
    <article id="choices-card">
      <div id="choices-card__header">
        <img src={icon} alt="" />
        <h4>{title}</h4>
      </div>
      <div id="choices-card__text">
        <p>{text}</p>
      </div>
    </article>
  );
};

export default ChoicesCard;
