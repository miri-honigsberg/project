import Header from './Header';
import * as React from 'react'; 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
 import {Link, useParams} from 'react-router-dom'
 import './Cards.css'



 
 

 const myElement = <privateName brand="name" />;
 function Cards() {

  const {name} = useParams()
  return ( 
  <>
  <Header/>
  <div>
    <Box sx={{ '& button': { m: 1 } }}>
      <h1 id='hhh1'>שלום ל{name}</h1>
      <h2> ? מה תרצו היום</h2>
      {/* <button onClick={()=>{
      alert("your" )
    }}>click </button>  */}

      <div className='bf'>
        <div className='element'>
          <Button variant="outlined" size="large">
            <Link to="/Date"> כרטיס בודד</Link>
          </Button>
          <h3> שח 35</h3>
        </div>
        <div className='element'>
          <Button variant="outlined" size="large">
            <Link to="/Error"> רכישת כרטיסיה </Link>
          </Button>
          <h3> שח 300</h3>
        </div>
        <div className='element'>
          <Button variant="outlined" size="large">
            <Link to="Payment">רכישת מנוי שנתי</Link>
          </Button>
          <h3> שח 1000</h3>
        </div>

      </div>


    </Box></div></>
    
  );
}

export default Cards


// import React from "react"
// import { useState } from 'react'
// import './App.css'


// function Cards() {
//   return (
//     <>
     
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           מס כרטיסים לרכישה {count}
//         </button>
//       </div>
//       <h1>רכישהה</h1>
      
//     </>
//   );
// }

 //export default Cards;