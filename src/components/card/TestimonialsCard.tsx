const TestimonialsCard = () => {
  return (
    <article id="testimonial-card">
      <h4>
        SquareUp has been Instrumental in Transforming our Online Presence.{" "}
      </h4>
      <p>
        Their team's expertise in web development and design resulted in a
        visually stunning and user-friendly e-commerce platform. Our online
        sales have skyrocketed, and we couldn't be happier.
      </p>
      <div className="author">
        <div className="info">
          <img src="/Profile.png" alt="" />
          <div className="text">
            <h6>John Smith</h6>
            <p>CEO of Chic Boutique</p>
          </div>
        </div>
        <div className="button">
          <button className="btn">
             open Website
          </button>
        </div>
      </div>
    </article>
  );
};

export default TestimonialsCard;
