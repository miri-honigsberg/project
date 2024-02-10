import { observer } from 'mobx-react';
import React,{useEffect} from 'react'
import Service from './Service';
//import AddService from './AddService';
import { getServices } from '../../../AppStore/DataServer';
import DataStore from '../../../AppStore/DataStore';
import './ServicesList.css'



const ServicesList = (observer(() => {

  useEffect(() => {
    const res=getServices();
    console.log(res);

}, [])
  return (
      <>
          <div className='sl'>
             
              <div>{DataStore.services.map((service, indexs) => {
                  return <Service key={indexs} service={service}>{service.name}</Service>
              })}
              </div>
              <div>
                  {/* <AddService /> */}
              </div>
          </div>
      </>
  )
}))
export default ServicesList