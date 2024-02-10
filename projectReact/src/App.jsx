import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Payment from './assets/component/Payment'
import Login from './assets/component/Login'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Admin from './assets/component/Admin'
import Cards from './assets/component/Cards'
import Date from './assets/component/Date'
import Manager from './assets/component/Manager'
import Error from './assets/component/Error'
//---Service---
import Service from './assets/component/Service/Service'
import ServicesList from './assets/component/Service/ServicesList'
//import AddService from './assets/component/Service/AddService'


import Appointments from './assets/component/Appointments'
import ListAppointment from './assets/component/ListAppointment'
import Header from './assets/component/Header'
//import Header1 from './assets/component/Header1'
import EditBusinessData from './assets/component/EditBusinessData'
import BusinessData from './assets/component/BusinessData'
import AddService from './assets/component/Service/AddService'



function App() {

  // useEffect(()=>{
  //   GlobalStateAdmin.initialServices();
  //   GlobalStateAdmin.initialMeetings();
  //   GlobalStateAdmin.initBusinessData();   

   
  // },[])
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <ListAppointment></ListAppointment> */}
      <BrowserRouter>
     
    <Routes>
    
     <Route path="Cards/:name" element={<Cards></Cards>}></Route>
    <Route path="Cards/:name/Payment" element={<Payment></Payment>}></Route> 
    <Route path="/" element={<Login></Login>}></Route>
    <Route path="/Admin" element={<Admin></Admin>}></Route>
    <Route path="/Date" element={<Date></Date>}></Route>
    <Route path="/Error" element={<Error></Error>}></Route>
    <Route path="/ListAppointment" element={<ListAppointment></ListAppointment>}></Route>

    <Route path="/Service" element={<Service></Service>}></Route>
    <Route path="/ServicesList" element={<ServicesList></ServicesList>}></Route>
    <Route path="/AddService" element={<AddService></AddService>}></Route>

    <Route path="/Manager" element={<Manager/>}></Route>
    <Route path="/Header" element={<Header/>}></Route> 
    <Route path="/BusinessData" element={<BusinessData/>}></Route>
    <Route path="/EditBusinessData" element={<EditBusinessData/>}></Route>
    <Route path="/appointments" element={<Appointments></Appointments>}></Route>



    <Route path='*' element={<Error />} />


    </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App
