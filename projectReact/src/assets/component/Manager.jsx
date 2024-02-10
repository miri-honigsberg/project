
import React, { Component, useEffect } from "react";
//import {broutherRouter as Router,  Route,link} from "react-router-dom";
import ServicesList from "./Service/ServicesList";
import { useNavigate } from "react-router-dom";
//import { palette } from '@mui/system';
import Typography from '@mui/material/Typography';
import { observer } from "mobx-react";
import BorderColorIcon from '@mui/icons-material/BorderColor';

import Header from './Header';
import DeleteIcon from '@mui/icons-material/Delete';
import Icon from '@mui/material/Icon';

<div>
    <h4>לעריכה</h4>
<Icon>star</Icon>;
<svg data-testid="DeleteIcon"></svg>
</div>


const Manager =( () =>{
  
        const navigate = useNavigate();
    const handleClick = () => {
      // בצע ניווט לדף פרטי
      navigate('/ServicesList');
    };
    return(
        
    <div>

<Header/>

        <h1>כניסת מנהל</h1>
        {/* <Box sx={{ color: 'secondary.main' }}> */}
        <Typography color="success">
        {/* <button onClick={() =>navigate('/AddService')}> לעריכה</button>
        <br/> */}
            <button onClick={() =>navigate('/AddService')}> לעריכת השירותים </button>

            <button onClick={() =>navigate('/EditBusinessData')}>  לעריכת פרטי העסק </button>

            <button onClick={() =>navigate('/ListAppointment')}>  לצפיה ברכישות ותאריכים תפוסים  </button>
            {/* </Box> */}
        </Typography>
        {/* <Header/> */}
    </div>
     
    )
})
//handleClick()


// function manager(){
// <h1>hbjnkml</h1>
//     return(
//         <div>
//            <h2>WellCome{this.state.user}</h2>
//            <h4>enter your name please:</h4>
//            <input Ref={this.userInput} type="text" defaultValue="miri"/>
//            <button onClick={this.changeName}>Change Name</button>

//         
//         </div>
//     )

// }

export default Manager