import React from 'react';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import Card from '../components/Card';

const Home = (props) => {

    const data = props.data;


  return (
    <div className='content my-4'>

    {
      data.map(element=>{
        return <Card key = {Math.random()}{...element.show}/>
      })
    }
    </div>
  )
}

export default Home
