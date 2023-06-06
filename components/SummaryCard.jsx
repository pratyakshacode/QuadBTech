import React from 'react';
import { Link } from 'react-router-dom';

const SummaryCard = (props) => {

 
  return (
    <>
     <div className="container text-center">
  <div className="row">
    <div className="col">
      <img className='summary-image' src={props.image.original} alt="" />
    </div>
    <div className="col">
    <h2 className='my-4'>{props.name}</h2>
    <span className='my-4'>{props.summary.slice(3, props.summary.length-4)}</span>
    <div className="container my-4">
      <Link className="btn btn-outline-light" to={`/show/bookTicket/${props.id}`}>Book Tickets Now</Link>
    </div>
    </div>
  </div>
</div>
    </>
  )
}

export default SummaryCard
