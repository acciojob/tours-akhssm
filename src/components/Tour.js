import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  const shortText = info.substring(0, 200);

  return (
    <article className="tour">
      <img src={image} alt={name} className="tour-img" />

      <footer>
        <div className="tour-info">
          <h3>{name}</h3>
          <h4 className="tour-price">${price}</h4>
        </div>

        <p id={`tour-item-para-${id}`}>
          {readMore ? info : `${shortText}...`}

          <button
            id={`see-more-${id}`}
            className="show-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show less" : "Show more"}
          </button>
        </p>

        <button
          id={`delete-btn-${id}`}
          className="remove-btn"
          onClick={() => removeTour(id)}
        >
          Remove
        </button>
      </footer>
    </article>
  );
};

export default Tour;
