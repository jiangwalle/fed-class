import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} alt=""></img>
      <h3>{props.title}</h3>
      <span>{props.createdAt}</span>
      <span>{props.rating}</span>
    </div>
  );
}

export default Card;
