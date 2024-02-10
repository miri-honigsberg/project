import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import Counter from './Counter';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import DataStore from '../../AppStore/DataStore';
import { addAppointment } from '../../AppStore/DataServer';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link} from 'react-router-dom'

function DateDialog(props) {
  const [count, setCount] =useState(1);
 
  const handleClick = () => {
    // בצע ניווט לדף פרטי
    navigate('/Payment');
  };
  const handleClose = () => {
    props.setOpenDialog(false)
    saveAppointment()
  }
  const saveAppointment = async () => {

    // const dateToAdd=new Date( props.selectedDate.date);
    const dateToAdd=new Date( props.selectedDate.date);
console.log("props-date",props.selectedDate.date);
    console.log("date-to-add",dateToAdd)
     addAppointment({ count: count, dateTime:dateToAdd , Time: props.selectedDate.time })
    

  }
  // handleClick()

  return (

    <Dialog
      // fullWidth={'md'}
      maxWidth={'md'}
      open={props.openDialog}
      onClose={handleClose}
      // PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title" >
      <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
        מספר כרטיסים לרכישה
      </DialogTitle>
      <DialogContent>
        <Counter 
        count={count} setCount={setCount}
        />

        <h2>בחר שעה</h2>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['TimePicker']}>

            <TimePicker label="Basic time picker" onChange={(e) => {

              props.setSelectedDate({
                ...props.selectedDate, time: e
              })
              console.log("-------e--",e)
              // props.setSelectedDate(e)
              if (props.selectedDate.date != null && props.selectedDate.time != null)
                addNewAppointment(e)
              

            }} />
          </DemoContainer>
        </LocalizationProvider>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          לביטול
        </Button>
        <Button onClick= {handleClose}>למעבר לתשלום</Button>
        {/* <Button onClick={() =>navigate('/ListAppointment')}> לתשלום</Button> */}
       



      </DialogActions>
    </Dialog>
  )
}
export default DateDialog