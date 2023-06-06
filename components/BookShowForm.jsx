import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BookShowForm = (props) => {

    const data = props.data;
  const param = useParams();
  
  useEffect(()=>{
    getSummary();
  },[])

  const [show, setShow] = useState([])
  const getSummary = async ()=>{

    let element = null;
    const showId = parseInt(param.showId);
    element = await data.filter(ele =>{
      return ele.show.id == showId;
    })

    setShow(element);
    
  }


  const handleSubmit = (e)=>{
    e.preventDefault();

    localStorage.setItem('name', details);
    setDetails({name:"", email:"", date:"", tickets:"", payment:"" })

    alert('Ticket Booked');
  }

  const [details, setDetails] = useState({name:"", email:"", date:"", tickets:"", payment:"" })
  const onchange = (e)=>{
    setDetails({...details, [e.target.name]: e.target.value})
  }
  return (

    <>

    <div className='container bsf-container'>
    {show.map(element=>{
      return <h1 className='my-4'>Book Your Tickets Now For : {element.show.name}</h1>
    })}

<form onSubmit={(e)=>handleSubmit(e)}>
  <div className="mb-3">
    <label htmlFor="text" className="form-label">Your Name</label>
    <input type="text" className="form-control" id=" name" name='name' aria-describedby="emailHelp" onChange={onchange} value={details.name}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Your Email</label>
    <input type="email" className="form-control" id="email" name='email'onChange={onchange} value={details.email}/>
  </div>
  <div className="mb-3">
    <label htmlFor="date" className="form-label">Date</label>
    <input type="date" className="form-control" id="date" name='date'onChange={onchange} value={details.date}/>
  </div>
  <div className="mb-3">
    <label htmlFor="tickets" className="form-label">Number of Tickets</label>
    <input type="number" className="form-control" id="tickets" name='tickets'onChange={onchange} value={details.tickets}/>
  </div>
  <div className="mb-3">
    <label htmlFor="payment">Payment Method</label>
    <select name="payment" id="payment" className='form-control' onChange={onchange}>
      <option value="UPI" onChange={onchange} >UPI</option>
      <option value="NetBanking" onChange={onchange}>NetBanking</option>
    </select>
  </div>
  
  <button type="submit" className="btn btn-outline-light">Book Ticket</button>
</form>
    </div>
    </>
  )
}

export default BookShowForm
