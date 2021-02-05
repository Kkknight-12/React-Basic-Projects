import React from 'react';
import Tour from './Tour';


const Tours = ( { tours, removeTour } ) => {
  return (
  <section> 
    <div className="title">
      <h2>ours tours</h2>
      <div className="underline"></div>
    </div>;
    <div>
      { tours.map( (tour) => {
        // spread operator is being send so that Tour component
        //  have access to object
        // no prop needed
        return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;

      })}
    </div>
  </section>
    )
};

export default Tours;
