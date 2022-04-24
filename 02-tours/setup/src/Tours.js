import React from 'react';
import Tour from './Tour';
const Tours = ({tourData, removeTour}) => {
  return <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tourData.map((tour)=>(
          <Tour key={tour.id} tour={tour} removeTour={removeTour}/>
        ))}
      </div>
  </section>;
};

export default Tours;
