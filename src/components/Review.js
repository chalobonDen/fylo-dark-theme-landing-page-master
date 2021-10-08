import React from 'react';
import reviews from '../data/reviews';

const Review = () => {
  return (
    <div className="review">
      {reviews.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.text}</p>
            <div className="profile">
              <img src={item.image} alt="" />
              <div>
                <h3>{item.name}</h3>
                <p>{item.position}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Review;
