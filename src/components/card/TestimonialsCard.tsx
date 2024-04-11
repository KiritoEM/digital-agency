import { Itestimonial } from "@/utils/interfaces";

const TestimonialsCard = ({
  text,
  title,
  author,
}: Itestimonial): JSX.Element => {
  return (
    <article id="testimonial-card">
      <div className="header">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className="author">
        <div className="info">
          <img src={author.picture} alt="" />
          <div className="text">
            <h6>{author.name}</h6>
            <p>{author.job}</p>
          </div>
        </div>
        <div className="button">
          <button className="btn">open Website</button>
        </div>
      </div>
    </article>
  );
};

export default TestimonialsCard;
