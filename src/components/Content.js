import React from 'react';
import contents from '../data/contents';

const Content = () => {
  return (
    <div className="content" id="features">
      {contents.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.image} alt="" />
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
