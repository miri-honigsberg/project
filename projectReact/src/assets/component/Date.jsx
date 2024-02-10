
import  { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import DataStore from '../../AppStore/DataStore'
// import { observer } from "mobx-react"
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import DateDialog from './DateDialog';
import './date.css'
//----------dialog------------






// const MyCalender = observer(() => {
//   const [openDialog, setOpenDialog] = useState(false)
//   const [selectedDate, setSelectedDate] = useState({ date: null, time: null });
// const onDateClick=()=>{
//   setOpenDialog(true)

// }

//  const handleDateClick = (date) => {
//   setOpenDialog(true)
//  }

//     // טיפול בלחיצה על תאריך
// if (dateIsAvailable(date)) {

//       // כאן תוכל לשלוח את התאריך לשרת
//       // לדוג', באמצעות קריאת API עם axios או fetch
//       // ולשמור את התאריך בצד השרת
//       // או לבצע פעולות נוספות בהתאם לצורך

//     setSelectedDate({ ...selectedDate, date: date });
//     console.log("----------------------------")
//     console.log(selectedDate)
//     // if (selectedDate.date != null && selectedDate.time != null)
//       // DataStore.addAppointment(date)
//   } else {
//     alert(`תאריך תפוס: ${date}`);
//   }
// };

//   const dateIsAvailable = (date) => {
//     // בדיקה אם התאריך פנוי
//     // כאן יכול להיות לוגיקת עסקים שלך
//     // לדוג', בדיקה בצד השרת אם התאריך פנוי
//     return true;
//   };

//   return (
//    <>
//     <h2>בחר תאריך:</h2>
//     <div className='d_calender'>

//       <Calendar
//         onChange={handleDateClick}
//            inputProps={{ min: getCurrentDateTime() }}
//         value={selectedDate.date}
//       />
//       {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DemoContainer components={['TimePicker']}>
//           <TimePicker label="Basic time picker" onChange={(e) => {
//   setSelectedDate({
//     ...selectedDate, time: e
//  })
//   if (selectedDate.date != null && selectedDate.time != null)

// }} 
//         </DemoContainer>
//       </LocalizationProvider> */}
// <DateDialog openDialog={openDialog} setOpenDialog={setOpenDialog} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>

//     </div></>
//   );


// })

import{ React, react} from 'react';
import * as Calendar from 'react-calendar';



const MyCalendar = () => {
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedDate, setSelectedDate] = useState({ date: null, time: null });

  const onDateClick = () => {
    setOpenDialog(true)
  }
  const handleDateClick = (date) => {
    setSelectedDate({date:date,time:selectedDate.time})
    setOpenDialog(true)
  }


  const dateIsAvailable = (date) => {
    
   
    // check if the date is free
    // Here can be your business logic
    // For Dodge, checking on the server side if the date is free
    return true;
  };



  // const getDayColor = (date) => {
  //   const today = new Date();
  //   const weekLater = new Date();
  //   weekLater.setDate(today.getDate() + 7);
  //   const weeksLater = new Date();
  //   weeksLater.setDate(today.getDate() + 21);
  //   if (dateIsAvailable(date)) {
      
  //     if (date >= today && date < weekLater) {
  //       return 'red';
  //     } else if (date >= weekLater && date < weeksLater) {
  //       return 'yellow';
  //     } else if (date >= weeksLater) {
  //       return 'green';
  //     }
  //     return 'black';
  //   }
  // };

  return (
    <>
      <h2>Select a date:</h2>
      <div className='d_calender'>
        <DateDialog openDialog={openDialog} setOpenDialog={setOpenDialog} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        <Calendar.default
          onChange={handleDateClick}
          
          date={selectedDate}



          // tileClassName={({ date }) => dateIsAvailable(date) ? getDayColor(date) : ''}
        />
      </div>
    </>
  );
}



export default MyCalendar