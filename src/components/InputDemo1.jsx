import React, { useState } from 'react'

export const InputDemo1 = () => {

    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [isSubbmited, setisSubbmited] = useState(false)
    const [dateLable, setdateLable] = useState("")
    //name == vr
    //setName -->function
    //"" inital value
    const nameHandler = (event)=>{
        
        console.log(event.target.value)
        setname(event.target.value)
    }
    const submitHandler =()=>{
        setisSubbmited(true)
    }

    const dateHandler = (event) => {
        const selectedDate = new Date(event.target.value); 
        const today = new Date(); //today
    
    
        selectedDate.setHours(0,0,0,0);
        today.setHours(0,0,0,0);
    
        const msInDay = 24 * 60 * 60 * 1000;
        console.log(msInDay)
        const diffDays = (selectedDate - today) / msInDay;
    
        console.log("Difference in days:", diffDays);
    
        if (diffDays === 0) {
            //console.log("Today");
            setdateLable("Today")
        } else if (diffDays === -1) {
            //console.log("Yesterday");
            setdateLable("Yesterday")
        } else if (diffDays === 1) {
            console.log("Tomorrow");
            setdateLable("Tomorrow")
        } else {
            console.log(`Selected date is ${Math.abs(diffDays)} days ${diffDays < 0 ? 'ago' : 'ahead'}`);
            setdateLable(`Selected date is ${Math.abs(diffDays)} days ${diffDays < 0 ? 'ago' : 'ahead'}`)
        }
    };
    
    
    
    

  return (
    <div style={{textAlign:"center"}}>
        <h1>INPUT DEMO 1</h1>
        <div>
            <label>NAME</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            {/* {name} */}
        </div>
        <div>
            <label>AGE</label>
            <input type='text' onChange={(event)=>{setage(event.target.value)}}></input>
            {/* {age} */}
        </div>
        <div>
            <input type='date' onChange={(event)=>{dateHandler(event)}}></input>
        </div>
        <div>
            <input type='color'></input>
        </div>
        <div>
            <button onClick={()=>{submitHandler()}}>submit</button>
        </div>
        {
            isSubbmited == true &&<div style={{color:"red"}}>
            <h1>OUTPUT</h1>
            <h1>NAME = {name}</h1>
            <h1>AGe = {age}</h1>
            <h1>Date Lable = {dateLable}</h1>
        </div>
        }
        
    </div>
  )
}
