import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour">
      <img src={image} alt={name} className="tour-img" />

      <footer>
        <div className="tour-info">
          <h3>{name}</h3>
          <h4 className="tour-price">${price}</h4>
        </div>

        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="show-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "See less" : "Show more"}
          </button>
        </p>

        <button className="remove-btn" onClick={() => removeTour(id)}>
          Remove
        </button>
      </footer>
    </article>
  );
};

export default Tour;
