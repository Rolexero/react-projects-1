import React, { useState } from 'react';
const Tour = ({tour, removeTour}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={tour.image} alt={tour.name} />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <h4 className="tour-price">₦{tour.price}</h4>
        </div>
        <p>{readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
            <button type="" onClick={()=>setReadMore(!readMore)}>{readMore ? 'Show less' : 'Show more'}</button>
        </p>
        <button className="delete-btn" onClick={()=>removeTour(tour.id)}>not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
