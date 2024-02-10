//import react from 'react';
import Button from '@mui/material/Button';
 import {Link, useParams} from 'react-router-dom'
import DataStore from '../../AppStore/DataStore';
import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react"
import { getAppointment } from '../../AppStore/DataServer';
//import Appointments from './Appointments';
import './Date.css'
 

 const  MyAppointment= observer(() => {

  const {name} = useParams()
  
// const [list, setList] =React.useState([])


  
//     async()=>{
// await DataStore.initialMeetings()
// setList(DataStore.listAppointments)
//   },
const dateIsAvailable = (date) => {
    
   
  // check if the date is free
  // Here can be your business logic
  // For Dodge, checking on the server side if the date is free
  return true;
};

const getMeetingColor = (dateTime) =>
 {
    const today = new Date();
    const meetingDate = new Date(dateTime);
    const timeDiff = Math.abs(meetingDate.getTime() - today.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
   if(  diffDays<0) 
    return 'non'
else
    if (diffDays===1) {
      return 'red'; 
    } else if (diffDays <= 7) {
      return 'orange'; 
    } 
    else if (diffDays >=7) 
    {
      return 'green';
    
    }
 
  };



//console.log(`The number of days between today and the target date is: ${daysDifference} days`);

// const getDayColor = (date) => {
//   console.log("get color",date)
// const today = new Date();
//   const weekLater = new Date();
//   weekLater.setDate(today.getDate() + 7);
//   const weeksLater = new Date();
//   weeksLater.setDate(today.getDate() + 21);
//   if (dateIsAvailable(date)) {
    
 
//     return 'black';
//   }}
useEffect(() => {
 
    getAppointment();
      // הרצה של קוד אסינכרוני, לדוגמה קריאה ל-API
      
      // setList(DataStore.listAppointments)
    console.log(DataStore.listAppointments)

     
  
}, []); // המערך הריק במקום לספק תלות חיצונית מבטל טעינה חוזרת ברחבה
  return (
  <>
   <h1>list appointment</h1>
   <p>-----------------</p>
   {/* <Appointments/> */}
   {/* <ul>{DataStore.listAppointments.map((item,index)=>

    {
       <li> <p>מספר כרטיסים </p>{item.count} 
    <p>-----------------</p>
    <p>תאריך</p>
    <p>-----------------</p>
     {item.dateTime}</li>})}</ul> */}
    <>
     {DataStore.meetings.map((item, index) => (
          <div key={index}>

<li>
  {item.count}
   <p>מספר כרטיסים </p>
   {item.count} 
    <p>-----------------</p>
    <p>תאריך</p>
    <p>-----------------</p>
     <div className={getMeetingColor(item.dateTime) }> 
    {item.dateTime}
  </div> 
  </li>
          </div>
        ))
     
     }</>
     
   </>
  );
})

export default MyAppointment


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