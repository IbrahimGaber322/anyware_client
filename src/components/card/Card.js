import "./Card.scss";

const Card = (props) => {
  const { title, description, children } = props; // Destructuring props for better readability

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__header__text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card__header__btn">
          <button>All</button>
        </div>
      </div>

      <div className="card__body">{children}</div>
    </div>
  );
};

export default Card;
