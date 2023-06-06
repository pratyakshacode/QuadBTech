import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SummaryCard from './SummaryCard';

const SummaryPage = (props) => {

  const data = props.data;
  const param = useParams();
  
  useEffect(()=>{
    getSummary();
  },[])

  const [show, setShow] = useState([])
  const getSummary = async ()=>{

    let element = null;
    const showId = parseInt(param.showId);
    element = data.filter(ele =>{
      return ele.show.id == showId;
    })

    setShow(element);
    console.log(element);
    console.log(element);
  }

  return (
    <>

  <div className="summary-div container my-3">
    {/* <button className='btn btn-primary' onClick={()=> getSummary()}>Show Summary</button> */}
    {show.map(element=>{
      return <SummaryCard key={element.show.id} {...element.show}/>
    })}

</div>
    
    
    </>
  )
}

export default SummaryPage
