import  React from 'react';
import {Link } from 'react-router-dom';
import Swal from 'sweetalert2'
//import Header from './Header';

const Error = () => 
  
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "The page you’re looking for doesn’t exist"
            // footer: '<a href="#">Why do I have this issue?</a>'
          });
        // return(
        //   <Header/>

        // )
     

 
export default Error;