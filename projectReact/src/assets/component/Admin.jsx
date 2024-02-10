//imr-עושה אימפורט לריאקט
//sfc-יוצר קומפוננטה
//rfc קומפוננתה


import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from "axios"
//import Admin from './Admin';
import Swal from 'sweetalert2'
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import './Admin.css'
import Header from './Header';
import CircularWithValueLabel from './Circle';





const Admin = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleClick = () => {
    // בצע ניווט לדף פרטי
    navigate('/Manager');
  };

  const handleSubmit = async (e) => {

    console.log("submit")
    e.preventDefault();
    console.log(e.target.value)
    const user = {
      name: username,
      password: password,
    }

    axios.post("http://localhost:8080/login", user)
      .then((response) => {
        console.log(response.status)
        if (response.status === 200)
          console.log('התחברת בהצלחה!')
        handleClick()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "הסיסמא תקינה",
          showConfirmButton: false,
          timer: 1500
        });
      }).catch((error) => {
        if (error.response && error.response.status === 401)
          console.log('2שם המשתמש או הסיסמה אינם נכונים.')
        Swal.fire({
          title: "mistake!",
          text: "try again please",
          icon: "question"
        })
      })


  }


  return (
<>
<Header/>
<div>
    <form onSubmit={handleSubmit}>

      <TextField label="שם משתמש" variant="filled" color="primary" focused    value={username} 
      onChange={(e) => setUsername(e.target.value)}/>
      <br />
      <br/>
      <TextField label="סיסמא" variant="filled" color="primary" focused value={password}
       onChange={(e) => setPassword(e.target.value)}/>
      <br />
       <button onClick={handleSubmit} type="submit">התחבר</button>
       <br/>
       <br/>
       <br/>
       <br/>
      

       <CircularWithValueLabel/>

      </form>
      </div>
</>
  );

  
};


export default Admin;
