import React, { useState } from 'react'
import { DoctorContext } from './DoctorContext'
import { AddDoctor } from './AddDoctor'
import { DoctorList } from './DoctorList'

export const Doctors = () => {
    const [doctors, setdoctors] = useState([
        {
            id:Math.floor(Math.random()*999),
            name:"amit",
            age:23,
            education:"MD",
            specialist:["heart","kidny"],
            city:"Ahmedabad",
            experiance:10
        }
    ])
    const doctorDispatcher = (action,payload)=>{
        
        switch(action){

            case "ADD DOCTOR":
                //payload object...
                break;
            case "DELETE DOCTOR":
                 //payload id...
                break;    
        }
    }
  return (
    <div>
            <DoctorContext.Provider value={{doctorDispatcher,doctors}}>
                <AddDoctor></AddDoctor>
                <DoctorList></DoctorList>
            </DoctorContext.Provider>
    </div>
  )
}
