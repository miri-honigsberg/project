import { action, makeObservable, observable, runInAction } from 'mobx'
import axios from 'axios'
import  DataStore from './DataStore';

//import {addAppointment,addServiceToServer, getServices, getAppointment}from './DataStore';



export const Login = async () => {
  axios.get("http://localhost:8080/login").then((result) => {
    runInAction(() => {
      this.listServices = result.data;
 
    });
  });

}

//BussinesData
export async function getBusinessData() {
  try {
    const response = await axios.get('http://localhost:8080/businessData');
    const businessData = response.data;
    DataStore.setBusinessData(businessData);
    return;
  } catch (error) { console.error(error); }
}
export async function updateBusinessData(businessData) {
  const res = await axios.post('http://localhost:8080/businessData', businessData);
  if (res.status === 200) {
    DataStore.editBusinessData(businessData);
    return 'success';
  }
  else {
    return 'failed';
  }
}


//שליפה 
//getServices
async function getServices() {
  try {
    const response = await fetch('http://localhost:8080/services', {
      method: 'get',
      headers: {
        "Content-Type": "application/json"
      }
    })
    let res = await response.json()
    console.log(res)
    DataStore.setServices(res);

  }
  catch (error) {
    console.log(error, "error")
  } 
}
async function addServiceToServer(service) {
    try {
      const response = await fetch('http://localhost:8080/service', {
        method: 'POST',
        body: JSON.stringify(service),
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (response.status === 200) {
        console.log("good")
        DataStore.addService(service);
      }
      else {
        console.log("not good")
      }
    }
    catch (error) {
      Swal.fire({
        title: "Error",
        text: "Unable to schedule the meeting",
        icon: "error",
      });
    }
  }


   async function addAppointment(newAppointment) {
    console.log("newAppointment",newAppointment)
    axios.post('http://localhost:8080/appointment', newAppointment)
    .then((res)=>{  
      DataStore.addnewAppointment(newAppointment);
         console.log("good")})
         .catch((error)=>console.log(error))
    // console.log(newAppointment);
    // const res = await axios.post('http://localhost:8080/appointment', newAppointment);}
    // if (res.status === 200) {
    //   DataStore.addnewAppointment(newAppointment);
    //   console.log("good")
    // }
    // else {
    //   //return 'failed';
    //   console.log("not good")
    // }
   }
  async function getAppointment() {
    try {
      const response = await fetch('http://localhost:8080/appointments', {
        method: 'get',
        headers: {
          "Content-Type": "application/json"
        }
      })
      let res = await response.json()
      console.log(res)
      DataStore.setMeetings(res);

    }
    catch (error) {
      console.log(error, "error")
    }
  }
export { addAppointment,addServiceToServer, getServices, getAppointment }
