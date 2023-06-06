import './App.css'
import Navbar from '../components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../components/Home';
import SummaryPage from '../components/SummaryPage';
import { useEffect, useState } from 'react';
import BookShowForm from '../components/BookShowForm';


function App() {

  const api = 'https://api.tvmaze.com/search/shows?q=all';
  const [data, setData] = useState([]);

  const getData = async ()=>{
    
    const response = await fetch(api);
    const result = await response.json();
    setData(result);
    console.log(data);
    
  }

  useEffect(()=>{
    getData();
  },[]);

  
  return (

    <>
    <Router>
  <Navbar/>
  <Routes>

    <Route exact path='/' element={<Home data={data}/>}/>
    <Route exact path='/show/summary/:showId' element= {<SummaryPage data={data}/>}/>
    <Route exact path='/show/bookTicket/:showId' element={<BookShowForm data = {data} />}/>
  </Routes>
  </Router>
    </>
  )
}

export default App
