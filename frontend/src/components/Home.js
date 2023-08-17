import React, {useState, useEffect} from 'react';
import axios from 'axios';  
import Detail from './Details';
function Home() {
    const [data,setData]=useState([]);
    const [tracker,setTracker]=useState(true);

    useEffect(()=>{
        axios.get('http://localhost:3001/api/ticket')
      .then(res=>setData(res.data))
      .catch(err=>  console.error(err))
    },[tracker])
const render=()=>{
  setTracker(!tracker);
}

    return (
        <div className='container'>
          { data.map((e,i)=>{
  return(
    <div key={i}>
      
      <Detail e={e} i={i} render={render} /></div>

    
    )})}  
        </div>
    );
}

export default Home;