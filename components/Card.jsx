import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <>
      <div className="card">
  <img src={props.image.original} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p>Ratings: {props.rating.average}</p>
    <p>Available in : {props.language}</p>
    <p>Premier on : {props.premiered}</p>
    <Link to={`/show/summary/${props.id}`} className="btn btn-outline-light">Learn More</Link>
  </div>
</div>
    </>
  )
}

export default Card
