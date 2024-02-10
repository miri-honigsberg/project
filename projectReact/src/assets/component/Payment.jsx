import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Swal from 'sweetalert2'
import Header from './Header';


const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});



export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    Toast.fire({
      icon: "success",
      title: "Signed in successfully"
    });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit=(event)=>{
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const email = formJson.email;
  }

  return (
      <>
    <Header/>
  <div>
    <React.Fragment>
{/* <Button onClick={handleClickOpen}>לרכישת מנוי</Button> */}
      {/* <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText> */}
           
          {/* </DialogContentText> */}
    
         
          <form>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Card Number"
            type="card number"
            fullWidth
            variant="standard"
            placeholder='הכנס מספר כרטיס אשראי'
          />
              <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="date"
            label="date"
            type="text"
            fullWidth
            variant="standard"
            placeholder='הזן תוקף'
          />
              <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="cvv"
            type="text"
            fullWidth
            variant="standard"
            placeholder='הזן 3 ספרות בגב הכרטיס'
          />
        {/* </DialogContent> */}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">לאישור</Button>
        </DialogActions> 
        
         
      </form>  
     
    </React.Fragment> 
    </div></>
  ); 
}
